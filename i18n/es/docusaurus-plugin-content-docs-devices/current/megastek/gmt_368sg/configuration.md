---
slug: /megastek/gmt_368sg/configuration
id: gmt_368sg-configuration
sidebar_label: Configuration
title: Megastek - GMT-368SG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Megastek GMT-368SG con los ajustes de servidor de Plaspy y comandos SMS/GPRS
keywords:
  - Configuración Megastek GMT-368SG
  - Instalación GMT-368SG
  - Rastreador Megastek Plaspy
  - Configuración servidor GMT-368SG
  - Configuración seguimiento GMT-368SG
  - Configuración rastreador GPS Megastek
  - Configuración rastreador vehículo Plaspy
  - Configuración SMS GPRS GMT-368SG
  - Integración rastreador plataforma Plaspy
  - Guía instalación rastreador GPS
---

# Megastek - Configuración GMT-368SG

Esta página reúne el contexto público de configuración para usar el rastreador Megastek GMT-368SG con Plaspy. Aquí encontrará los ajustes prácticos y los comandos SMS/GPRS públicos necesarios para apuntar el equipo a Plaspy, de modo que el rastreador pueda informar posición y estado a la plataforma. El contenido está pensado para ayudar a usuarios técnicos a preparar el dispositivo para su integración con Plaspy, manteniendo visibles y accesibles los detalles específicos del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GMT-368SG soporta reporte por SMS y GPRS (TCP o UDP) y los ejemplos públicos de configuración que se muestran más abajo incluyen comandos por SMS y la contraseña por defecto del dispositivo cuando procede.

## Resumen de configuración

El proceso de configuración prepara el GMT-368SG para comunicarse de forma confiable con Plaspy y que las actualizaciones de ubicación y las alertas aparezcan en la plataforma. El objetivo es establecer la identidad del dispositivo, el APN para GPRS, el intervalo de reporte y el endpoint del servidor Plaspy, y luego verificar que los reportes llegan correctamente.

- Establecer o confirmar el ID del dispositivo para que Plaspy asocie los datos entrantes con el registro correcto.  
- Configurar el APN del operador móvil y, si corresponde, usuario y contraseña del APN para que el rastreador abra la sesión de datos GPRS.  
- Apuntar el rastreador al endpoint del servidor Plaspy y al puerto compartido para que los datos lleguen a la plataforma.  
- Ajustar el intervalo de reporte y habilitar el reporte por GPRS o el modo de datos correspondiente.  
- Validar la conectividad para confirmar que el dispositivo aparece y reporta correctamente en Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support: UDP or TCP (the device may be configured to use either transport on port 8888)  
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos típicos antes de la configuración

- Un dispositivo GMT-368SG encendido y accesible con un IMEI válido para usar como identificador.  
- Una tarjeta SIM funcional con datos móviles activados y las credenciales APN correctas para el operador.  
- Capacidad para enviar comandos SMS desde un teléfono autorizado si va a usar configuración por SMS, o acceso a la herramienta de configuración del fabricante si prefiere ese método.  
- La contraseña por defecto del dispositivo cuando sea requerida por los comandos; los ejemplos públicos muestran la contraseña por defecto 000000.  
- Tener anotado el IMEI del dispositivo (normalmente los primeros 15 dígitos) para usar en los comandos de ID.  
- Confirmación de que el firmware del equipo soporta configuración por SMS y reporte GPRS tal como se describe.

## Cómo se conecta este rastreador a Plaspy

El GMT-368SG puede usar SMS para controles básicos, pero envía datos de posición y eventos a Plaspy mediante GPRS usando TCP o UDP. Una vez configurado el endpoint y el puerto del servidor Plaspy, el dispositivo enviará actualizaciones de ubicación y alarmas que Plaspy procesará para mapeo y monitoreo.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy: d.plaspy.com o 54.85.159.138 en el puerto 8888.  
- El dispositivo envía actualizaciones regulares de ubicación según el intervalo configurado para que los vehículos sean visibles en Plaspy.  
- Alarmas y eventos como exceso de velocidad, vibración, batería baja y desconexión de alimentación externa pueden ser reportados a Plaspy si están habilitados en el dispositivo.  
- Si se pierde cobertura celular, las funcionalidades de registro del dispositivo pueden retener posiciones y enviarlas cuando se restablezca GPRS.  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma interpretará las conexiones entrantes del GMT-368SG sin necesidad de seleccionar manualmente el protocolo en el servidor.

## Flujo común de configuración

1. Acceda al método de configuración oficial de Megastek que vaya a utilizar (comandos SMS, herramienta móvil del proveedor o software del fabricante).  
2. En la configuración del dispositivo, ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.  
3. Configure el puerto del servidor a 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).  
4. Elija UDP o TCP en el dispositivo si el firmware permite seleccionar el transporte.  
5. Aplique o guarde la configuración y, si usa SMS, envíe los comandos SMS necesarios desde el número autorizado.  
6. Reinicie el dispositivo si el rastreador requiere reboot para aplicar cambios.  
7. Valide que el dispositivo reporta a Plaspy comprobando la conectividad del equipo y las actualizaciones de posición entrantes en la plataforma.

## Ejemplos de comandos de configuración

La documentación del GMT-368SG proporciona comandos SMS para configuración. A continuación figuran los patrones de comandos SMS públicos tomados del manual del dispositivo. Los ejemplos usan la contraseña por defecto 000000. Reemplace los marcadores por sus valores reales al enviar SMS.

1. Establecer el ID del dispositivo (usar el IMEI o el identificador de 15 dígitos). Reemplace el marcador IMEI con el IMEI de su equipo (primeros 15 dígitos). El ejemplo muestra la plantilla del documento para extraer un ID de 15 dígitos desde el campo IMEI:

```
M000000,22,{{('XXXXXXXXXXXXXXX' + imei.substring(0,15)).slice(-15)}}
```

Explicación: Reemplace la expresión por el IMEI de 15 dígitos o por el ID de dispositivo que desea que el rastreador informe.

2. Configurar el APN del operador (incluya el usuario y la contraseña del APN si son necesarios). Reemplace {{apn}}, {{apnu}} y {{apnp}} con los valores del APN de su operador:

```
M000000,23,{{apn}}{{,{{apnu}},{{apnp}}}}
```

Explicación: {{apn}} es la cadena del APN. {{apnu}} y {{apnp}} son opcionales y representan el usuario y la contraseña del APN.

3. Establecer el intervalo de actualización a 60 segundos:

```
M000000,25,60
```

4. Configurar el servidor GPRS para apuntar a Plaspy. Este ejemplo usa la IP pública del servidor Plaspy y el puerto que aparecen en la documentación:

```
M000000,24,56 54.85.159.138,8888
```

Explicación: El comando configura el equipo para usar la IP del servidor Plaspy 54.85.159.138 y el puerto 8888. Algunas herramientas pueden aceptar d.plaspy.com como dirección del servidor.

5. Habilitar el modo GPRS (activar reporte de datos):

```
M000000,21,2
```

Notas sobre marcadores y contraseña: los comandos anteriores usan la contraseña por defecto 000000 en los ejemplos. Al enviar comandos SMS, mantenga el campo de contraseña intacto a menos que lo haya cambiado en el dispositivo.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos o los parámetros disponibles; siempre verifique la versión de firmware del dispositivo antes de enviar comandos.  
- El GMT-368SG admite ejemplos públicos de configuración tanto por SMS como por GPRS; utilice el método que se ajuste a su instalación y condiciones del operador.  
- Elija TCP o UDP en el dispositivo según la fiabilidad de su red y el comportamiento del operador; Plaspy acepta ambos transportes en el puerto 8888 y realiza detección automática de protocolo.  
- Cuando la plantilla de comandos del fabricante use marcadores o expresiones de script para IMEI o IDs, sustitúyalos con cuidado por el IMEI o el valor de ID correcto del dispositivo.  
- Tras aplicar los ajustes, valide la conectividad confirmando que el dispositivo aparece y reporta en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el Megastek GMT-368SG para reportar a Plaspy ofrece a las organizaciones visibilidad consistente sobre la ubicación de los vehículos, su estado y el reporte de eventos usando un endpoint de servidor compartido y conocido. Con el reporte GPRS configurado a d.plaspy.com o 54.85.159.138 en el puerto 8888 y la detección automática de protocolo en Plaspy, la integración es sencilla y mantiene la consistencia del reporte en una flota heterogénea.

Para saber más sobre Plaspy y cómo maneja las integraciones de dispositivos, visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware y detalles del fabricante más recientes, verifique la información actual en la web de Megastek https://www.megastek.com/ ya que las instrucciones del fabricante y el firmware pueden cambiar con el tiempo.
