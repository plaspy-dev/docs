---
slug: /nvs/navitrek_um_04/configuration
id: navitrek_um_04-configuration
sidebar_label: Configuration
title: NVS - Navitrek UM-04 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para NVS Navitrek UM-04 para conectar el rastreador al servidor Plaspy
keywords:
  - Configuración NVS Navitrek UM-04
  - Instalación Navitrek UM-04
  - Configuración del rastreador GPS NVS
  - Configuración del rastreador en Plaspy
  - Configuración de servidor Navitrek
  - Configuración de rastreo de vehículos
  - Configuración APN Navitrek
  - Comandos SMS para rastreador GPS
  - Configuración GPRS Navitrek
  - Ajustes del servidor Plaspy
---

# NVS - Configuración del Navitrek UM-04

Esta página describe el contexto público de configuración para usar el NVS Navitrek UM-04 con Plaspy. Reúne los pasos prácticos y comandos SMS de dominio público empleados para preparar el Navitrek UM-04 a fin de que reporte a un servidor de rastreo de terceros como Plaspy. El Navitrek UM-04 determina parámetros de navegación mediante señales GLONASS y GPS, supervisa el estado del vehículo, informa eventos de alarma e intercambia información con un centro de despacho; esta guía se centra en los aspectos de configuración necesarios para que el dispositivo quede visible en Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los rastreadores soportados y detecta automáticamente el protocolo del dispositivo durante la comunicación inicial. Los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por ello considere los comandos SMS y el flujo descritos a continuación como una orientación pública práctica que complementa la documentación oficial de NVS.

## Visión general de la configuración

El objetivo al configurar el Navitrek UM-04 para Plaspy es apuntar el rastreador al endpoint del servidor Plaspy, asegurar que el equipo tenga una conexión de datos funcional y verificar que informe correctamente a la plataforma. En unidades Navitrek UM-04 esto suele implicar enviar comandos SMS de configuración o utilizar la herramienta del fabricante para establecer APN y parámetros de servidor, y luego activar el modo GPRS para que se transmitan datos.

- Configure el APN del dispositivo y, opcionalmente, las credenciales del APN para que el rastreador acceda a datos móviles.
- Establezca la dirección y el puerto del servidor GPRS apuntando a Plaspy para que la ubicación y los eventos se reciban en la plataforma.
- Active el modo de datos GPRS en el dispositivo para que la telemetría se envíe al endpoint del servidor.
- Verifique que el dispositivo responda y aparezca en Plaspy, confiando en que Plaspy detecta automáticamente el protocolo del rastreador.
- Use la contraseña de fábrica cuando esté disponible para realizar la configuración vía SMS o siga el método del fabricante.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto 8888 para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Una tarjeta SIM con un plan de datos móviles activo y conocimiento de los ajustes APN del operador
- Acceso al envío de SMS desde un teléfono o la herramienta oficial de configuración NVS para aplicar comandos
- Conocimiento de la contraseña del dispositivo si difiere del valor de fábrica
- Alimentación al dispositivo y una instalación estable para que el rastreador pueda registrarse en la red
- Acceso a la documentación oficial de NVS o soporte del proveedor para detalles específicos del firmware

## Cómo se conecta este rastreador a Plaspy

El Navitrek UM-04 se configura para enviar ubicaciones, estado y eventos de alarma al endpoint y puerto del servidor Plaspy. Cuando el dispositivo está apuntado a Plaspy y en modo GPRS, establecerá una sesión de datos y comenzará a transmitir su telemetría al endpoint compartido de Plaspy, donde la plataforma detecta el protocolo y procesa los datos entrantes.

- El rastreador apunta al dominio o a la IP del servidor Plaspy y al puerto 8888
- El rastreador abre una conexión de datos usando el APN configurado y el modo GPRS
- La telemetría y los eventos de alarma se envían a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los reportes sin requerir un puerto específico por dispositivo
- El rastreador puede usar UDP o TCP según la selección del dispositivo

## Flujo de configuración habitual

1. Acceda al método oficial de configuración NVS para el Navitrek UM-04, ya sea mediante comandos SMS o la herramienta de configuración del fabricante.
2. Introduzca la dirección del servidor Plaspy especificando d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración de servidor o IP administrativa.
3. Establezca el puerto del servidor en 8888, que Plaspy utiliza para todos los dispositivos soportados.
4. Elija el protocolo de transporte UDP o TCP si el dispositivo requiere selección explícita.
5. Configure el APN y las credenciales del APN del operador celular para que el equipo pueda establecer una sesión GPRS.
6. Aplique o guarde los ajustes y cambie el rastreador al modo GPRS o modo de datos para que empiece a transmitir al servidor.
7. Reinicie el dispositivo si el fabricante lo requiere para activar los nuevos parámetros.
8. Valide que el equipo reporta a Plaspy y que la plataforma detecta el protocolo del rastreador automáticamente.

## Ejemplo de comandos de configuración

El Navitrek UM-04 puede configurarse mediante comandos SMS. Los comandos de ejemplo que siguen son de dominio público y se muestran en el orden que figura en la muestra del fabricante. El ejemplo asume que la contraseña del dispositivo es 123456, que es el valor de fábrica en la muestra pública. Reemplace los marcadores con los datos de su operador.

- Reinicio de fábrica opcional usando la contraseña del dispositivo
```text
begin123456
```

- Establecer la zona horaria a UTC 0
```text
time zone123456 0
```

- Establecer el APN del operador
```text
apn123456 [apn]
```
Explicación: reemplace [apn] por el nombre del APN de su operador móvil.

- Establecer nombre de usuario y contraseña del APN si son necesarios
```text
up123456 [apnu] [apnp]
```
Explicación: reemplace [apnu] por el usuario del APN y [apnp] por la contraseña del APN. Envíe este comando solo si su APN requiere autenticación.

- Establecer el servidor GPRS hacia Plaspy usando la IP y el puerto
```text
adminip123456 54.85.159.138 8888
```
Nota: Alternativamente puede apuntar a d.plaspy.com si el dispositivo acepta nombres de dominio. Plaspy usa el puerto 8888 para todos los dispositivos.

- Cambiar el dispositivo a modo GPRS
```text
gprs123456,1,1
```
O, en algunas variantes de firmware, use la forma corta
```text
gprs123456
```

- Consultar la configuración actual
```text
check123456
```

Use estos comandos SMS en el orden mostrado al realizar una configuración inicial. Si necesita un reinicio de fábrica, ejecute el comando de reset primero. Confirme siempre la contraseña del dispositivo antes de enviar comandos administrativos.

## Notas de configuración

- Las versiones de firmware del fabricante pueden cambiar la sintaxis de los comandos y los parámetros aceptados. Verifique la sintaxis SMS exacta en la documentación NVS correspondiente a su revisión de firmware.
- El dispositivo admite configuración vía SMS según el ejemplo público, pero también pueden existir herramientas del proveedor o utilidades de PC que simplifiquen despliegues masivos.
- Elija UDP o TCP según las necesidades de su instalación; Plaspy admite ambos y detectará automáticamente el comportamiento del protocolo cuando el dispositivo se conecte.
- Recuerde reemplazar los marcadores como [apn], [apnu] y [apnp] con valores reales del operador antes de enviar los comandos.
- Después de aplicar los ajustes de servidor y APN, cambiar a modo GPRS y reiniciar la unidad suele completar la secuencia de activación.

## Por qué usar Plaspy con esta configuración

Configurar el Navitrek UM-04 para reportar a Plaspy ofrece a las organizaciones una forma práctica de centralizar la ubicación de vehículos, el estado y la información de alarmas desde dispositivos que soportan GLONASS y GPS. Apuntar el rastreador a Plaspy y habilitar el modo GPRS permite visibilidad en tiempo real y reporte de eventos, confiando en que Plaspy detectará automáticamente el protocolo del dispositivo y procesará la telemetría entrante.

Para saber más sobre Plaspy y las funcionalidades de la plataforma visite https://www.plaspy.com. Para obtener los comandos más recientes por dispositivo, notas de firmware y orientación de instalación consulte el sitio del fabricante https://www.nvs-ts.ru/ para verificar los procedimientos de configuración y el comportamiento del equipo.
