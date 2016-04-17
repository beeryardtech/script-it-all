#!/bin/bash -

# See http://www.systutorials.com/50204/making-chrome-accept-self-signed-certificates-on-linux/

if [ $# -lt 1 ]; then
    echo "Usage: $0 hostname"
    exit 1
fi

HOSTNAME=$1

get_cert()
{
    local hostname=$1
    local sslArgs="-servername $hostname -connect $hostname:443 -showcerts"

    #echo QUIT | openssl s_client  2>/dev/null | sed -ne '/BEGIN CERT/,/END CERT/p' >/tmp/cert-$hostname

    echo "Getting Cert"

    echo QUIT \
        | openssl s_client -servername $hostname -connect $hostname:443 -showcerts 2>null \
        | sed -ne '/BEGIN CERT/,/END CERT/p' \
        >/tmp/cert-$hostname
}

add_cert()
{
    local hostname=$1

    echo "Adding cert"
    certutil -d sql:$HOME/.pki/nssdb -A -t "P,," -n $hostname -i /tmp/cert-$hostname
}

list_certs()
{
    certutil -d sql:$HOME/.pki/nssdb -L
}

main()
{
    get_cert $HOSTNAME
    add_cert $HOSTNAME
    list_certs
}
main

