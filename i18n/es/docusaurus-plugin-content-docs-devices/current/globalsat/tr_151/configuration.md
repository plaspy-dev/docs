---
slug: /globalsat/tr_151/configuration
id: tr_151-configuration
sidebar_label: Configuration
title: GlobalSat - TR-151 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GlobalSat TR-151 para integrarlo con Plaspy incluyendo ajustes de servidor y ejemplos SMS
keywords:
  - Configuración GlobalSat TR-151
  - Configuración TR-151
  - Configuración TR-151 Plaspy
  - Configuración rastreador GlobalSat
  - Configuración servidor TR-151
  - Configuración rastreador GPS Plaspy
  - Rastreo vehicular TR-151
  - Rastreador de activos TR-151
  - Guía configuración rastreador GPS
  - Integración dispositivo Plaspy
---

# GlobalSat - TR-151 Configuración

Esta página documenta el contexto público de configuración para usar el GlobalSat TR-151 con Plaspy. Describe los ajustes prácticos del servidor y el formato público de comandos SMS utilizados para apuntar el TR-151 a Plaspy para seguimiento en vivo y reportes. Use esta guía para comprender qué debe aplicarse en el dispositivo antes de que el rastreador sea visible en la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos del fabricante para configurar el TR-151 pueden variar según la revisión de firmware, el tipo de instalación o las herramientas del proveedor, por lo que siga la orientación general aquí y confirme las instrucciones específicas del dispositivo con la documentación de GlobalSat cuando sea necesario.

## Visión general de la configuración

El objetivo de la configuración es preparar el TR-151 para que se comunique de forma confiable con Plaspy y validar que el dispositivo sea visible en la plataforma. Para los dispositivos TR-151, un método público común es enviar al rastreador un comando SMS de configuración que establezca el APN y el endpoint del servidor.

- Configure el TR-151 para que envíe sus reportes GPRS al endpoint del servidor de Plaspy.
- Proporcione al dispositivo las credenciales APN correctas para que pueda abrir una sesión de datos.
- Asegúrese de que el dispositivo use el puerto compartido de Plaspy y el tipo de transporte correcto si se requiere.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy antes de la instalación final.
- Opcionalmente reinicie o vuelva a arrancar el rastreador tras aplicar los ajustes para garantizar que los cambios surtan efecto.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador, por lo que el dispositivo debe configurarse para reportar a la dirección y puerto indicados usando UDP o TCP según corresponda.

## Requisitos habituales antes de la configuración

- Un dispositivo TR-151 cargado con el número IMEI conocido.
- Una tarjeta SIM activa con datos y capacidad de SMS y los detalles correctos del APN.
- Acceso al método de configuración por SMS de GlobalSat o a la herramienta de configuración del fabricante utilizada para su modelo.
- Un teléfono fiable o un gateway SMS para enviar los mensajes de configuración al dispositivo.
- Conocimiento del APN, nombre de usuario APN y contraseña APN del operador de la SIM.
- Acceso a credenciales o cuenta de Plaspy para confirmar que el dispositivo aparece en la plataforma después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo, el TR-151 envía datos de ubicación y estado al endpoint y puerto compartidos del servidor de Plaspy para que el dispositivo sea visible y reportable dentro de la plataforma Plaspy. Plaspy interpreta automáticamente el protocolo entrante y presenta al usuario la ubicación, conectividad y datos de eventos.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com (o 54.85.159.138).
- Todos los dispositivos TR-151 deben usar el puerto común 8888 para el reporte.
- El dispositivo puede usar transporte UDP o TCP según el equipo o la configuración de firmware.
- Una vez que los datos llegan a Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes.
- Un reporte exitoso habilita la visibilidad de ubicación, monitoreo de eventos y supervisión operativa dentro de Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de GlobalSat para el TR-151, típicamente comandos SMS o la herramienta de configuración del fabricante.
2. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Elija el transporte UDP o TCP si el dispositivo requiere selección de transporte.
5. Proporcione APN, nombre de usuario APN y contraseña APN según lo solicite la configuración del dispositivo.
6. Aplique o guarde la configuración en el rastreador y, si es necesario, reinicie o vuelva a arrancar el dispositivo.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del equipo dentro de la plataforma Plaspy.

Si usa configuración por SMS, siga exactamente el formato de comandos del fabricante e incluya los tokens de checksum requeridos donde se indique.

## Ejemplos de comandos de configuración

El TR-151 puede configurarse enviando comandos SMS. El ejemplo del fabricante incluye tokens de marcador que deben reemplazarse antes de enviar. Las plantillas públicas de comandos extraídas de la configuración del fabricante se muestran a continuación.

Setup command (set APN and Plaspy server):
```text
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

Reboot command (optional, use when required to apply changes):
```text
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Notas sobre los marcadores y valores:
- {{imei}}: Reemplácelo con el número IMEI del dispositivo.
- [apn]: Reemplácelo con el APN del operador móvil de la tarjeta SIM.
- [apnu]: Reemplácelo con el nombre de usuario APN si el operador lo requiere; deje en blanco si no aplica.
- [apnp]: Reemplácelo con la contraseña APN si el operador la requiere; deje en blanco si no aplica.
- {{checksum}} y {{checksumreeboot}}: Son checksums hexadecimales en mayúsculas de dos caracteres calculados a partir del texto del comando antes del carácter '*'.

Cálculo del checksum (método público usado en el ejemplo del fabricante):
- Calcule el XOR de los códigos ASCII de cada carácter en la cadena del comando hasta pero sin incluir el carácter '*'.
- Convierta el byte resultante a una cadena hexadecimal en mayúsculas de dos dígitos (rellene con cero a la izquierda si es necesario).
- Inserte ese valor hexadecimal de dos caracteres en lugar del marcador de checksum.

La página del fabricante también muestra un ejemplo de formato por lotes SMS usado con comandos estilo Plaspy como:
TSPRXAB27GHKLMnaicz*U!
Preserve la estructura exacta del comando mostrada arriba al componer mensajes SMS de configuración.

## Notas de configuración

- Las variantes de firmware y regionales pueden cambiar la sintaxis de los comandos o los requisitos del checksum; siempre valide los comandos en un dispositivo no crítico primero.
- El TR-151 soporta métodos de configuración por SMS y GPRS según la documentación pública, por lo que use el enfoque que coincida con el procedimiento de su dispositivo.
- Si se presenta la opción, Plaspy admite tanto UDP como TCP en el puerto 8888; elija el transporte que recomiende su red o firmware.
- Asegúrese de que las credenciales APN sean correctas; un APN mal configurado impedirá que el dispositivo abra una sesión de datos hacia el servidor de Plaspy.
- Reiniciar el dispositivo tras aplicar los ajustes de servidor y APN suele ser necesario para comenzar a reportar a la plataforma.

## Por qué usar Plaspy con esta configuración

Configurar el GlobalSat TR-151 para que reporte a Plaspy proporciona a las organizaciones visibilidad consistente de vehículos y activos rastreados usando una configuración de servidor y puerto común. Con el TR-151 apuntando a d.plaspy.com o 54.85.159.138 en el puerto 8888, los dispositivos intentarán enviar su telemetría por GPRS y Plaspy detectará y procesará automáticamente el protocolo del rastreador, simplificando el alta y el monitoreo continuo.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the most current device specific commands, firmware notes, and installation instructions verify the latest details on the GlobalSat official website https://www.globalsat.com.tw/.
