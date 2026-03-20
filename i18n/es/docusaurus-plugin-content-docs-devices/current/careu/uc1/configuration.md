---
slug: /careu/uc1/configuration
id: uc1-configuration
sidebar_label: Configuration
title: CAREU - UC1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CAREU UC1 con Plaspy, incluye ajustes de servidor y flujo de trabajo para la integración
keywords:
  - configuración CAREU UC1
  - instalación CAREU UC1
  - CAREU UC1 Plaspy
  - rastreador GPS CAREU UC1
  - cerradura electrónica CAREU UC1
  - configuración de rastreadores Plaspy
  - ajustes de servidor Plaspy
  - configuración de rastreador GPS
  - configuración de seguimiento de activos
  - rastreador de cerradura para contenedores
---

# CAREU - Configuración UC1

Esta página describe el contexto público de configuración para usar el CAREU UC1 con Plaspy. Se centra en los ajustes del servidor Plaspy y en las acciones prácticas que deberá realizar del lado del fabricante para apuntar un dispositivo UC1 a Plaspy, de modo que informe ubicación en tiempo real, alertas por manipulación y telemetría de eventos de la cerradura. La guía está pensada para instaladores técnicos y administradores de flota que preparan rastreadores UC1 para su integración con la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El UC1 es una cerradura electrónica robusta con rastreador GPS, posicionamiento GNSS, conectividad 4G global con eSIM opcional, detección de manipulación y batería recargable; en esta página vinculamos esas capacidades del dispositivo a los ajustes de servidor Plaspy que deberá aplicar.

## Resumen de la configuración

El objetivo de la configuración es preparar el UC1 para que sus posiciones GNSS y eventos de seguridad lleguen a Plaspy de forma confiable. Normalmente esto implica establecer la dirección y el puerto del servidor, seleccionar el método de transporte si es necesario y garantizar conectividad celular y batería suficientes para el reporte inicial.

- Apunte el UC1 al servidor Plaspy usando el endpoint y el puerto compartidos para que la telemetría llegue a la plataforma.
- Seleccione UDP o TCP en el dispositivo si el firmware requiere elegir el transporte.
- Verifique la conectividad celular y que el dispositivo pueda obtener soluciones GNSS para reportar ubicación.
- Guarde y aplique los cambios, luego confirme que el UC1 aparece en Plaspy una vez que el dispositivo inicie sesión con el servidor.
- Valide que los mensajes de manipulación, apertura/cierre y estado de batería se reenvían a Plaspy para completar las comprobaciones operativas.

## Ajustes del servidor Plaspy

Configure el UC1 para que reporte al servidor Plaspy usando estos ajustes públicos al introducir valores de configuración del fabricante o al usar la herramienta de aprovisionamiento del dispositivo:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888 depending on device selection
- Plaspy automatically detects the tracker protocol so the server accepts connections and interprets messages from supported devices

Todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe usar el puerto 8888 para UC1 y otros rastreadores compatibles.

## Requisitos típicos antes de configurar

- Un dispositivo UC1 cargado con acceso a la interfaz de configuración del fabricante o a la herramienta de aprovisionamiento complementaria.
- Conectividad celular activa mediante la SIM instalada o eSIM configurada con un plan de datos adecuado para el uplink.
- Una vista despejada al cielo o un entorno de prueba para obtener soluciones GNSS y verificar la ubicación.
- Acceso al método o software oficial de configuración de CAREU para poder ingresar el endpoint de Plaspy y aplicar los ajustes.
- Acceso administrativo a su cuenta Plaspy para confirmar la presencia del dispositivo y la telemetría después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el UC1 usa su enlace celular para enviar soluciones GNSS, eventos de seguridad y telemetría del dispositivo al endpoint y puerto compartidos del servidor Plaspy. Plaspy procesa esos mensajes y los presenta en la interfaz de gestión de flota para monitoreo, alertas e informes.

- El UC1 reporta soluciones GNSS y marcas de tiempo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según el firmware del dispositivo y la configuración seleccionada.
- Eventos de seguridad como corte de cadena, manipulación, vibración y eventos de desbloqueo se reenvían a Plaspy para generar alertas.
- El nivel de batería y los mensajes de estado del dispositivo forman parte de la telemetría regular dirigida al servidor Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador para interpretar correctamente los mensajes del UC1 después de que el dispositivo se conecte al puerto compartido.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de CAREU o al software proporcionado por el fabricante, o utilice la interfaz de aprovisionamiento por SMS o web si el firmware lo soporta.
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o, si se requiere, la dirección IP 54.85.159.138.
3. Configure el puerto de destino en 8888, que es el puerto compartido de Plaspy usado por todos los dispositivos.
4. Elija UDP o TCP para el transporte si el dispositivo solicita una selección explícita.
5. Aplique o guarde la configuración en la herramienta del dispositivo y confirme que el dispositivo aceptó los cambios.
6. Reinicie el dispositivo si la documentación del fabricante o el firmware requieren un reinicio para activar los nuevos ajustes del servidor.
7. Valide que el UC1 reporta a Plaspy revisando en la plataforma el latido del dispositivo, la solución de ubicación y un paquete de telemetría inicial.

## Ejemplos de comandos de configuración

La sintaxis exacta de los comandos y el método de aprovisionamiento varían según el firmware de CAREU y las herramientas de configuración del fabricante. CAREU puede proporcionar comandos por SMS, una app de gestión del dispositivo o una utilidad de aprovisionamiento de escritorio para establecer los valores del servidor. Como los comandos son específicos del firmware, consulte la guía oficial de configuración de CAREU para el formato exacto de los comandos y cualquier marcador de posición requerido.

Si dispone de una lista de comandos públicos del fabricante, inclúyalos aquí siguiendo el orden del fabricante; de lo contrario utilice la herramienta del proveedor para establecer:
- Server domain or IP to d.plaspy.com or 54.85.159.138
- Port to 8888
- Transport to UDP or TCP if prompted

Nota: Cuando los comandos del fabricante incluyan marcadores de posición como {{apn}} o {{apnu}} conserve esos marcadores y sustituya las credenciales APN de su operador cuando la herramienta del dispositivo lo solicite.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la ubicación exacta de los menús o las cadenas SMS/comandos necesarias para establecer los valores de servidor y transporte; revise siempre las notas de la versión de CAREU.
- Usar el dominio d.plaspy.com puede ser útil para el enrutamiento basado en DNS, mientras que 54.85.159.138 está disponible cuando la interfaz de configuración requiere una IP directa.
- El puerto 8888 es compartido entre todos los dispositivos Plaspy, por lo que no necesita asignación de puerto por dispositivo.
- Si el dispositivo permite ambos modos UDP y TCP, elija el transporte que CAREU recomiende para obtener la mejor fiabilidad en su entorno de red.
- Confirme que los mensajes de desbloqueo y manipulación se incluyen en una secuencia de prueba corta después de la conexión a Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el CAREU UC1 para reportar a Plaspy combina el sellado mecánico seguro y el rastreo remoto en un único flujo operativo. Las organizaciones obtienen visibilidad continua de la ubicación, alertas por manipulación y eventos de acceso del UC1 mientras usan Plaspy para centralizar notificaciones, historial y monitoreo a nivel de flota. Esta integración ayuda a simplificar la respuesta ante robos y la auditoría en contenedores, remolques y otros activos.

Para conocer más sobre Plaspy y cómo se integra con dispositivos compatibles visite https://www.plaspy.com. Para comandos específicos de dispositivo, notas de firmware y procedimientos del fabricante consulte la documentación oficial de CAREU en https://www.systech-iot.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
