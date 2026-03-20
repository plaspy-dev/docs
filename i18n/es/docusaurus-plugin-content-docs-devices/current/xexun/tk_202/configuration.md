---
slug: /xexun/tk_202/configuration
id: tk_202-configuration
sidebar_label: Configuration
title: Xexun - TK-202 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar Xexun TK-202 para Plaspy con ajustes de servidor, comandos SMS y pasos prácticos
keywords:
  - Configuración Xexun TK-202
  - Instalación Xexun TK-202
  - Integración TK-202 Plaspy
  - Configuración rastreador GPS Xexun
  - Configuración servidor rastreador GPS
  - Configuración SMS TK-202
  - Configuración GPRS rastreador
  - Configuración rastreo vehicular
  - Configuración rastreador GPS vestible
  - Configuración rastreo de flotas
---

# Xexun - Configuración del TK-202

Esta página reúne la información pública necesaria para usar el rastreador GPS Xexun TK-202 con Plaspy. Incluye los ajustes del servidor, requisitos habituales y un flujo de trabajo práctico para preparar el dispositivo y enviar datos de ubicación y estado a Plaspy. Siempre que esté disponible, se muestran comandos SMS de ejemplo del fabricante como referencia para las tareas de configuración más comunes.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK-202 se puede configurar mediante comandos SMS y ajustes GPRS; por eso esta documentación se centra en los parámetros públicos y en un proceso seguro y repetible para enviar datos a Plaspy.

## Resumen de configuración

El objetivo al configurar el TK-202 para Plaspy es apuntar el rastreador al endpoint del servidor de Plaspy, garantizar conectividad GPRS funcional y confirmar que el rastreador informe con un intervalo adecuado para que sea visible en la plataforma Plaspy. Las siguientes acciones forman parte del proceso de configuración en la mayoría de los casos:

- Configurar el APN y las credenciales GPRS para que el dispositivo pueda acceder a la red de datos.
- Apuntar el dispositivo al endpoint y puerto del servidor Plaspy para que la telemetría se entregue correctamente.
- Seleccionar el modo de transporte si lo solicita el firmware del dispositivo (por ejemplo UDP o TCP).
- Establecer un intervalo de reporte acorde al caso de uso y a las limitaciones de batería o alimentación.
- Validar la conectividad y verificar que el dispositivo aparece en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el TK-202:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP can be used on port 8888
- Plaspy automatically detects the tracker protocol so the server accepts common tracker protocols

Estos valores son los ajustes compartidos que Plaspy usa para dispositivos compatibles y deben ingresarse en el equipo o enviarse mediante el método de configuración que soporte el fabricante.

## Requisitos habituales antes de la configuración

- Un TK-202 con energía suficiente y listo para configurar.
- Una tarjeta SIM activa con datos móviles habilitados y los datos APN correctos del operador.
- Acceso a un teléfono con función SMS o a la herramienta de configuración del fabricante si se va a usar SMS.
- Conocimiento de la contraseña de administración del dispositivo para los comandos SMS. Los ejemplos usan 123456 como contraseña por defecto.
- Un lugar de prueba con cobertura celular para que funcione el GPRS.
- Acceso a la documentación del fabricante Xexun o a las instrucciones del proveedor para comportamientos específicos del dispositivo.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el TK-202 usa su conexión GPRS para enviar datos de posición y eventos al endpoint y puerto del servidor Plaspy. Plaspy recibe esos mensajes y los mapea automáticamente al protocolo correcto del dispositivo, de modo que el equipo se hace visible y reportable en la plataforma.

- El rastreador envía telemetría GPRS al dominio o IP del servidor Plaspy en el puerto 8888.
- El transporte puede ser UDP o TCP según los requisitos del dispositivo y la selección del usuario.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no hace falta seleccionar un protocolo adicional en la plataforma.
- Una vez que informa, Plaspy mostrará la ubicación y la información básica de eventos para monitoreo y operación.
- Es imprescindible configurar correctamente el APN y los parámetros GPRS para que el rastreador alcance el servidor Plaspy.

## Flujo de trabajo recomendado

1. Acceda al método oficial de configuración Xexun, por ejemplo comandos SMS o la herramienta del proveedor suministrada por su distribuidor.
2. Ingrese la dirección del servidor Plaspy como dominio d.plaspy.com o la IP 54.85.159.138 en la opción de servidor del dispositivo.
3. Establezca el puerto en 8888, que es el que Plaspy utiliza para los dispositivos compatibles.
4. Seleccione UDP o TCP en el equipo si el firmware exige elegir el transporte.
5. Configure el APN y el nombre de usuario o contraseña del APN si el operador los requiere.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del equipo lo indican.
7. Valide que el dispositivo reporte a Plaspy comprobando que aparece en la plataforma y envía las actualizaciones esperadas.

## Comandos de configuración de ejemplo

Los siguientes comandos son ejemplos públicos en formato SMS usados por dispositivos Xexun y se presentan en la misma secuencia que aparece en la guía del fabricante. Estos comandos mantienen el marcador de contraseña y los marcadores de APN del material original. La contraseña de ejemplo en estos comandos es 123456, que es la contraseña por defecto indicada en la documentación. Cambie la contraseña o reemplace el marcador si la contraseña de su equipo es distinta.

- Optional initial factory reset command when starting configuration
```text
begin123456
```
- Set the operator APN. Replace [apn] with your operator APN string
```text
apn123456 [apn]
```
- Set the APN username if required. Replace [apnu] with the APN username
```text
apnuser123456 [apnu]
```
- Set the APN password if required. Replace [apnp] with the APN password
```text
apnpasswd123456 [apnp]
```
- Set the GPRS server to Plaspy using the Plaspy server IP and port
```text
adminip123456 54.85.159.138 8888
```
- Set the GPRS mode on the device (device specific behavior may vary)
```text
gprsmode123456
```
- Set the location update interval to 60 seconds
```text
t060s***n123456
```

Notas sobre los marcadores y la contraseña
- [apn] es el marcador del APN del operador que debe reemplazarse por el APN real de su SIM.
- [apnu] y [apnp] son marcadores opcionales para nombre de usuario y contraseña del APN cuando el operador exige credenciales.
- La contraseña numérica 123456 en estos ejemplos es la mostrada en los materiales del fabricante. Si usted cambió la contraseña, use la contraseña actual en cada comando.

## Notas de configuración

- Los ejemplos del TK-202 arriba utilizan configuración vía SMS, que es común en dispositivos Xexun; las herramientas del fabricante o firmware más recientes pueden ofrecer métodos alternativos.
- El comportamiento de los comandos y las opciones disponibles puede variar entre versiones de firmware y revisiones de hardware; consulte la documentación Xexun si un comando no es reconocido.
- Cuando esté disponible, elija UDP o TCP según la capacidad del dispositivo y las condiciones de red. Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- Si realiza un restablecimiento de fábrica con el comando inicial, asegúrese de conocer la contraseña de administración del equipo, y tenga en cuenta que se perderán los ajustes personalizados.
- Confirme siempre los detalles del APN con el operador de la SIM antes de intentar la configuración GPRS.

## Por qué usar Plaspy con esta configuración

Usar el Xexun TK-202 con Plaspy ofrece una forma directa de recibir telemetría de los dispositivos en una plataforma centralizada para monitorear ubicaciones, eventos y estado operativo básico. Configurar el TK-202 para que reporte al endpoint compartido de Plaspy reduce la complejidad por dispositivo, ya que Plaspy utiliza el mismo puerto para todos los equipos compatibles y gestiona la detección del protocolo de forma automática.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and manufacturer instructions verify setup details on the official Xexun site https://www.xexun.com/. Manufacturer specifications and setup methods can change over time so checking the vendor documentation ensures you have the latest instructions.
