---
slug: /reachfar/rf_v43/configuration
id: rf_v43-configuration
sidebar_label: Configuration
title: Reachfar - RF-V43 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el RF-V43 con los ajustes de servidor compartido de Plaspy y pasos prácticos
keywords:
  - Configuración Reachfar RF-V43
  - Instalación Reachfar RF-V43
  - Reachfar RF-V43 Plaspy
  - Configuración servidor RF-V43
  - Configuración rastreador GPS RF-V43
  - Configuración rastreador Plaspy
  - Instalación rastreador para mascotas RF-V43
  - Configuración plataforma Reachfar GPS
  - Guía integración RF-V43
  - Configuración seguimiento RF-V43
---

# Reachfar - Configuración del RF-V43

Esta página ofrece una guía pública para configurar el rastreador Reachfar RF-V43 con la plataforma Plaspy. Resume los valores prácticos de servidor y el flujo de trabajo necesario para apuntar el dispositivo a Plaspy, y hace referencia a las funcionalidades del RF-V43 descritas por el fabricante, como conectividad 4G, posicionamiento GPS/LBS/WiFi, alertas por geocerca y notificaciones de batería baja.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este se conecta. Los pasos concretos del fabricante, las herramientas y el formato de comandos pueden variar según la versión de firmware, lote de hardware, tipo de instalación y utilidades del vendedor. Use esta página como guía práctica de integración y verifique los controles específicos del dispositivo en la documentación oficial de Reachfar cuando sea necesario.

## Resumen de configuración

El objetivo de la configuración es preparar un RF-V43 para que informe de forma fiable su ubicación y eventos a Plaspy usando el endpoint y puerto compartido de la plataforma. La configuración confirma la conectividad, garantiza que se seleccione el transporte correcto y permite que el RF-V43 aparezca en Plaspy para su monitoreo.

- Configure el RF-V43 para que reporte al endpoint de Plaspy y así los datos de ubicación y alertas lleguen a la plataforma.
- Valide la conectividad de red y que el rastreador pueda utilizar sus métodos de posicionamiento soportados (GPS, LBS, WiFi) para obtener localizaciones.
- Seleccione el transporte apropiado (UDP o TCP) y establezca el puerto común de Plaspy para que los paquetes del equipo lleguen a la plataforma.
- Pruebe el envío de eventos, como alertas por geocerca y notificaciones de batería baja, para que se muestren en Plaspy.
- Confirme que el dispositivo sea visible en su cuenta Plaspy y que las actualizaciones de ubicación correspondan con lo esperado.

## Ajustes del servidor Plaspy

Use los siguientes ajustes de servidor de Plaspy al configurar el RF-V43. Estos valores son públicos y se comparten entre los dispositivos compatibles con Plaspy.

- Servidor dominio d.plaspy.com
- Servidor IP 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP (elija según el requisito del dispositivo)
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Nota: Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará el protocolo correcto de forma automática una vez que el rastreador establezca la conexión con el servidor.

## Requisitos previos

- Un RF-V43 con alimentación suficiente o conectado a una fuente de energía para la configuración inicial.
- Conexión de datos 4G activa en el equipo cuando aplique, y un plan de datos compatible con el rastreador.
- Acceso al método o software oficial de configuración de Reachfar proporcionado por el vendedor para su firmware y modelo.
- Cobertura de red en la zona donde se usará el rastreador para que pueda obtener fijaciones de ubicación y alcanzar el servidor Plaspy.
- Acceso a su cuenta Plaspy para confirmar que el dispositivo se vuelve visible y comienza a reportar tras la configuración.
- La información y documentación del RF-V43 del fabricante para identificar las opciones de configuración específicas del modelo.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo para reportar a Plaspy, el RF-V43 establece una conexión de red con el endpoint compartido de Plaspy y envía datos de ubicación y eventos según las capacidades de su firmware. Plaspy recibe y procesa los datos entrantes, detecta automáticamente el protocolo en uso y pone la información a disposición en la plataforma.

- El rastreador se apunta al endpoint del servidor Plaspy (d.plaspy.com o 54.85.159.138) y al puerto compartido 8888.
- El transporte del dispositivo puede configurarse en UDP o TCP según el método de configuración; Plaspy admite ambos.
- Las actualizaciones de ubicación generadas por GPS, LBS o WiFi se transmiten a Plaspy para visibilidad en tiempo real.
- Eventos como violaciones de geocerca y alertas de batería baja se envían a la plataforma según lo configurado en el dispositivo.
- Plaspy detecta automáticamente el protocolo entrante del rastreador, por lo que no es necesario seleccionar el protocolo en la plataforma.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Reachfar para el RF-V43 (herramienta web del fabricante, utilidad de escritorio o app provista por el vendedor).
2. En los ajustes de red/servidor del dispositivo, ingrese la dirección del servidor Plaspy como d.plaspy.com o 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888 para que coincida con el puerto compartido de Plaspy.
4. Si el equipo requiere seleccionar el transporte, elija UDP o TCP según su entorno o las opciones del dispositivo.
5. Aplique o guarde la configuración dentro de la herramienta del fabricante para que los nuevos ajustes se escriban en el rastreador.
6. Reinicie el RF-V43 si la documentación del fabricante indica que es necesario tras la configuración.
7. Valide que el dispositivo reporte a Plaspy comprobando en su cuenta Plaspy las actualizaciones de ubicación y los eventos entrantes.

## Ejemplos de comandos de configuración

El fabricante del RF-V43 puede proporcionar comandos de configuración o una utilidad de instalación específica para su firmware. La sintaxis exacta de los comandos y las opciones disponibles dependen de la herramienta del vendedor, la versión de firmware y si el equipo se configura vía interfaz web, software de escritorio u otros medios. Dado que aquí no se incluyen conjuntos de comandos específicos del modelo, siga la guía de configuración de Reachfar o la herramienta suministrada con su dispositivo para introducir la dirección del servidor Plaspy (d.plaspy.com o 54.85.159.138) y establecer el puerto 8888, y luego elija UDP o TCP si se requiere.

Si dispone de ejemplos de comandos proporcionados por Reachfar o su distribuidor, aplíquelos en el orden exacto indicado por la documentación de Reachfar y conserve cualquier marcador de posición que se requiera.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la ubicación de los ajustes de servidor y los pasos exactos de configuración; verifique las instrucciones para la versión de firmware del RF-V43 que tenga.
- La elección entre UDP y TCP puede depender del comportamiento de la red local o del soporte del firmware del rastreador; Plaspy admite ambos transportes.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando este se conecte al servidor.
- Después de aplicar los cambios, permita tiempo para que el rastreador se registre y envíe los informes iniciales; consulte Plaspy para comprobar las actualizaciones de ubicación y los registros de eventos.
- Consulte siempre la documentación de Reachfar para funciones específicas del dispositivo, como la configuración de geocercas, control de LED y gestión de energía.

## Por qué usar Plaspy con esta configuración

Configurar el RF-V43 para que reporte a Plaspy proporciona un endpoint único y consistente para recopilar datos de ubicación y eventos entre dispositivos. Para organizaciones que gestionan la seguridad de mascotas o monitorización ligera de activos, dirigir los datos del RF-V43 a Plaspy permite visibilidad centralizada, alertas oportunas como geocercas y notificaciones de batería baja, y una supervisión simplificada de la flota o los dispositivos.

Para saber más sobre Plaspy y cómo gestiona las conexiones y los reportes de dispositivos, visite https://www.plaspy.com. Para los métodos de configuración más recientes del Reachfar RF-V43, notas de firmware y documentación del dispositivo, consulte el sitio del fabricante https://www.reachfargps.com/ ya que los procedimientos del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
