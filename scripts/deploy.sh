

echo "Iniciando proceso de despliegue..."

docker build -t novatech-web:1.0 .

if [ $(docker ps -q -f name=novatech-prod) ]; then
    echo "Deteniendo versión anterior..."
    docker stop novatech-prod
    docker rm novatech-prod
fi

echo "Levantando nueva versión..."
docker run -d --name novatech-prod -p 80:80 novatech-web:1.0

echo "Verificando disponibilidad del servicio..."
sleep 3

if curl -s -f http://localhost > /dev/null; then
    echo "¡Despliegue exitoso! El servicio web responde correctamente."
    exit 0
else
    echo "Error: El servicio no responde tras el despliegue."
    exit 1
fi