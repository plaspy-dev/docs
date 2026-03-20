---
slug: /queclink/gv58cg/configuration
id: gv58cg-configuration
sidebar_label: Configuration
title: QuecLink - GV58CG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar QuecLink GV58CG con Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración QuecLink GV58CG
  - Configuración GV58CG
  - Configuración servidor QuecLink GV58CG
  - Configuración Plaspy GV58CG
  - Configuración seguimiento GV58CG
  - Configuración rastreador GPS QuecLink
  - Configuración rastreador flota GV58CG
  - Comandos SMS GV58CG
  - Configuración rastreador Plaspy
  - Rastreo vehicular GV58CG
---

# QuecLink - Configuración GV58CG

Esta página describe el contexto público de configuración para usar el QuecLink GV58CG con Plaspy. Resume los ajustes de servidor prácticos y el flujo de trabajo de configuración que suelen aplicar los integradores para que el dispositivo reporte ubicaciones y telemetría a Plaspy. Cuando están disponibles, se muestran ejemplos públicos de comandos SMS proporcionados por el fabricante como orientación.

Plaspy utiliza un endpoint de servidor compartido y un único puerto para todos los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración. El GV58CG soporta configuración por SMS y parámetros de servidor mediante GPRS/APN; los comandos que se muestran aquí reflejan ejemplos públicos y marcadores de posición para las credenciales APN.

## Resumen de configuración

El objetivo al configurar el GV58CG para Plaspy es dejar el dispositivo listo para enviar reportes de posición y estado fiables a la plataforma Plaspy, validar la conectividad y permitir su visualización en su tablero de Plaspy. Los pasos de ejemplo a continuación se concentran en preparar el acceso a la red, los destinos del servidor, los intervalos de reporte y entradas básicas de alarma para que el dispositivo quede operativo con Plaspy.

- Configure el APN y los parámetros GPRS para que el dispositivo use datos móviles y alcance Plaspy.  
- Apunte el dispositivo al endpoint y puerto del servidor Plaspy para que la telemetría llegue a la plataforma.  
- Establezca intervalos de reporte razonables y habilite entradas de eventos necesarias para alertas y monitoreo.  
- Utilice SMS o la utilidad de configuración del fabricante para cargar estos parámetros y aplicarlos.  
- Verifique que el dispositivo aparezca en Plaspy y esté reportando posiciones y eventos.

## Ajustes del servidor de Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: support for UDP or TCP on port 8888; the device may be configured to use either UDP or TCP  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos habituales antes de la instalación

- Un equipo GV58CG con alimentación y accesible, con acceso a la interfaz de configuración o al número de control por SMS.  
- Una SIM activa con datos y SMS habilitados y un APN apropiado para el operador móvil.  
- Acceso al método de configuración del fabricante, como comandos SMS o las herramientas de configuración de QuecLink.  
- La contraseña del dispositivo para configuración por SMS; los ejemplos usan la contraseña por defecto queclink.  
- Un método para reiniciar o cortar la alimentación del dispositivo después de aplicar la configuración.  
- Acceso a su cuenta o plataforma Plaspy para validar los datos entrantes y la visibilidad del dispositivo.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el GV58CG utiliza su enlace celular para enviar datos de posición y eventos al endpoint y puerto compartido de Plaspy. Plaspy recibe la telemetría y decodifica automáticamente el protocolo del rastreador, haciendo el dispositivo visible en la plataforma sin diferencias de puerto por dispositivo.

- El dispositivo envía ubicación y telemetría por GPRS o LTE al servidor Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888.  
- Puede configurar el transporte como UDP o TCP según el firmware del dispositivo y la preferencia del instalador.  
- Los intervalos de reporte y los disparadores de eventos determinan la frecuencia con la que Plaspy recibe actualizaciones y alertas.  
- Entradas como SOS o encendido se reportan como eventos a Plaspy para alertas y seguimiento de estado.  
- Una vez que el dispositivo envía datos al endpoint de Plaspy, la plataforma identifica automáticamente el protocolo del rastreador.

## Flujo común de configuración

1. Acceda al método oficial de configuración QuecLink para el GV58CG, como comandos SMS o el software del fabricante, y confirme la contraseña del dispositivo.  
2. Configure el APN y las credenciales del operador para que el dispositivo pueda conectarse a datos móviles.  
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del equipo.  
4. Establezca el puerto en 8888 y elija UDP o TCP si el dispositivo requiere seleccionar el transporte.  
5. Aplique o guarde la configuración y, si es necesario, reinicie o haga un ciclo de alimentación del dispositivo para que los ajustes tengan efecto.  
6. Valide que el dispositivo reporte correctamente a Plaspy revisando los mensajes entrantes y las actualizaciones de posición en su cuenta Plaspy.  
7. Ajuste los intervalos de reporte y las entradas de eventos según los requisitos operativos.

## Ejemplos de comandos de configuración

El GV58CG puede configurarse mediante comandos SMS. Los siguientes comandos de ejemplo públicos se encuentran en la documentación del fabricante. La contraseña del dispositivo usada en estos ejemplos es la contraseña por defecto queclink. Los comandos se muestran en el orden sugerido para una configuración inicial. Los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} deben reemplazarse por el APN del operador, el usuario APN y la contraseña APN según sea necesario.

1. Optional initial factory restore (use only when required)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC+0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the mobile operator APN and credentials
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} is the operator APN string.  
- {{apnu}} is the APN username if required.  
- {{apnp}} is the APN password if required.

4. Set the GPRS reporting server to Plaspy using both domain and IP examples and port 8888
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Set the periodic location update interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Nota: La sintaxis exacta y los parámetros de los comandos SMS pueden variar según el firmware. Mantenga los marcadores de posición intactos al editar comandos y reemplace solo con sus valores y credenciales APN reales. Como buena práctica de seguridad, cambie la contraseña SMS por defecto después de la configuración inicial.

## Notas de configuración

- La configuración vía SMS está documentada públicamente para el GV58CG y es útil cuando no hay acceso directo por software o USB.  
- Las variaciones de firmware pueden cambiar la sintaxis de los comandos o los parámetros disponibles. Verifique los comandos según la versión de firmware del equipo.  
- Elija UDP o TCP según sus preferencias operativas y confirme que el firmware del dispositivo soporta el transporte seleccionado.  
- Después de cambiar el APN o los ajustes de servidor, permita tiempo para que el dispositivo se registre en la red y confirme la conexión GPRS antes de esperar mensajes al servidor.  
- Se recomienda cambiar la contraseña SMS por defecto (queclink en los ejemplos) tras completar la configuración para mejorar la seguridad.

## Por qué usar Plaspy con esta configuración

Configurar el GV58CG para reportar a Plaspy ofrece a los operadores de flotas acceso centralizado a ubicación, eventos de estado y telemetría de sensores a través de un único endpoint de servidor. Usar los ajustes de servidor compartido de Plaspy simplifica el despliegue porque todos los dispositivos compatibles utilizan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador, reduciendo la complejidad de configuración por equipo.

Para conocer más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para comandos específicos del dispositivo, notas de firmware y la documentación oficial de QuecLink, verifique los detalles en el sitio del fabricante https://www.queclink.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
