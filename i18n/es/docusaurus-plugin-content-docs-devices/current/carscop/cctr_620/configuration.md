---
slug: /carscop/cctr_620/configuration
id: cctr_620-configuration
sidebar_label: Configuration
title: Carscop - CCTR-620 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Carscop CCTR-620 y conectarlo a Plaspy con ejemplos de comandos SMS y ajustes de servidor
keywords:
  - Configuración Carscop CCTR-620
  - Configuración rastreador GPS Carscop
  - Integración CCTR-620 Plaspy
  - Configuración servidor Carscop
  - Comandos SMS CCTR-620
  - Guía configuración rastreador GPS
  - Configuración servidor Plaspy
  - Configuración seguimiento vehicular
  - Configuración rastreador personal
  - Configuración rastreador GPRS
---

# Carscop - Configuración del CCTR-620

Esta página describe la información pública necesaria para usar el rastreador Carscop CCTR-620 con la plataforma Plaspy. Incluye los comandos SMS que el fabricante publica y los ajustes de servidor compartidos por Plaspy para que el dispositivo pueda enviar ubicación y estado. La información combina la descripción del dispositivo con el conjunto de comandos SMS de ejemplo que se suelen utilizar para preparar el rastreador para el reporte por GPRS.

Plaspy emplea el mismo endpoint y puerto compartido para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El CCTR-620 soporta reporte por GPRS y configuración por SMS, por lo que esta guía se centra en esos métodos públicos para dejar el equipo listo para comunicarse con Plaspy.

## Resumen de la configuración

El objetivo es dejar al CCTR-620 preparado para enviar de forma fiable datos de ubicación y eventos a Plaspy. El proceso típico configura el APN y parámetros de red, apunta el rastreador a los ajustes del servidor Plaspy y verifica que el dispositivo permanezca en línea y reporte como se espera.

- Configure el APN del dispositivo y las credenciales APN opcionales para habilitar datos GPRS.  
- Apunte el dispositivo al endpoint del servidor Plaspy para que los reportes lleguen a la plataforma.  
- Seleccione el tipo de transporte si es necesario y establezca el puerto compartido que usa Plaspy.  
- Valide la conectividad y confirme que el dispositivo aparece en la plataforma Plaspy.  
- Use comandos por SMS o la herramienta del fabricante, según esté disponible, para aplicar los ajustes.  
- Mantenga el rastreador en línea y supervise los primeros reportes para asegurar el formato correcto.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol so the server accepts compatible protocol frames

## Requisitos previos habituales

- Un CCTR-620 cargado y con alimentación listo para configuración.  
- Una SIM móvil válida con datos GPRS habilitados y los valores APN del operador.  
- Un método para enviar comandos SMS al dispositivo (teléfono o gateway SMS), ya que el equipo admite configuración por SMS.  
- Acceso al manual del fabricante o referencia de configuración para confirmar la sintaxis de los comandos.  
- La contraseña por defecto del dispositivo si los comandos SMS la requieren (los ejemplos abajo usan la contraseña por defecto pública).  
- Cobertura de red en la ubicación del dispositivo para permitir el registro GPRS y conexiones salientes.

## Cómo se conecta este rastreador a Plaspy

El CCTR-620 puede configurarse para reportar por GPRS a Plaspy o para usar SMS en alertas y comandos. Cuando está configurado para reporte por GPRS, el dispositivo envía paquetes de ubicación y estado al endpoint y puerto compartidos de Plaspy, lo que permite que el equipo sea visible en la plataforma.

- El rastreador abre una conexión de datos GPRS y envía reportes periódicos de posición al endpoint del servidor Plaspy.  
- Plaspy acepta los reportes entrantes en el servidor y puerto compartidos y detecta automáticamente el protocolo.  
- Si se configura reporte por SMS, las alarmas y mensajes de ubicación pueden enviarse por SMS además de por GPRS.  
- El dispositivo debe tener configurado el APN del operador y las credenciales APN opcionales para establecer conexiones GPRS.  
- Una vez que el dispositivo reporta correctamente, quedará visible para monitoreo, notificaciones de eventos y seguimiento en Plaspy.

## Flujo de trabajo típico de configuración

1. Consulte el método oficial de configuración de Carscop o la documentación y confirme el formato de comandos SMS para su versión de firmware.  
2. Configure el APN del operador y, si aplica, el usuario y la contraseña APN en el dispositivo para habilitar datos móviles.  
3. Ingrese d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en los ajustes de servidor del dispositivo.  
4. Establezca el puerto del servidor en 8888, tal como requiere Plaspy.  
5. Seleccione UDP o TCP si el rastreador solicita elegir el transporte.  
6. Aplique o guarde los cambios de configuración y envíe los SMS de confirmación que sean necesarios.  
7. Reinicie el dispositivo si el fabricante lo indica o después de aplicar una configuración de red completa.  
8. Verifique que el rastreador reporte a Plaspy y que aparezca en la plataforma en los primeros intervalos de reporte.

## Ejemplos de comandos de configuración

El fabricante suministra comandos de configuración por SMS. A continuación se muestran los comandos públicos de ejemplo en el orden recomendado por el proveedor. La configuración de ejemplo utiliza la contraseña por defecto del dispositivo 123456 en los comandos mostrados.

- Optional initial factory reset command (use only if you need to restore factory defaults):
```text
RESET*123456
```

- Set the device time zone to UTC+0:
```text
TIMEZONE*123456*+00
```

- Set the operator APN (replace [apn] with your mobile operator APN):
```text
APN*123456*[apn]
```

- Set the APN username and password if required by the operator (replace placeholders):
```text
USERNAME*123456*[apnu]*[apnp]
```

- Configure the GPRS server to point to Plaspy using the Plaspy server IP and port:
```text
IP*123456*54.85.159.138,8888
```

- Keep the tracker online command so it remains actively connected:
```text
KEEPONLINE*123456
```

Notas sobre los marcadores y uso:
- [apn] es la cadena APN del operador móvil necesaria para datos GPRS.  
- [apnu] es el nombre de usuario APN cuando el operador lo requiere.  
- [apnp] es la contraseña APN cuando es necesaria.  
- Reemplace los marcadores por los valores que le proporcione el operador antes de enviar el SMS.  
- Los comandos de ejemplo usan la contraseña pública por defecto 123456 tal como aparece en el ejemplo del fabricante. Confirme la contraseña de su unidad o cámbiela si su política de seguridad lo exige.

## Notas de configuración

- La configuración por SMS es un método común para este modelo, pero confirme que su firmware acepta la misma sintaxis de comandos.  
- Las revisiones de firmware y las herramientas del proveedor pueden cambiar nombres de comandos o parámetros necesarios; consulte el manual oficial cuando sea posible.  
- Elija UDP o TCP según sus condiciones de red y las recomendaciones del fabricante; Plaspy soporta ambos en el puerto compartido.  
- Asegúrese de que los ajustes APN sean exactos y pruebe la conectividad de datos antes de asumir que el dispositivo alcanzará d.plaspy.com o 54.85.159.138.  
- El mismo puerto de Plaspy se usa en varios dispositivos, por lo que el valor de puerto suele ser 8888 al configurar otros rastreadores compatibles.

## Por qué usar Plaspy con esta configuración

Configurar el Carscop CCTR-620 para reportar a Plaspy permite a empresas y particulares centralizar la visibilidad de ubicaciones y el monitoreo de eventos para rastreadores personales, mascotas u otros activos portátiles. Con el rastreador apuntando a Plaspy, puede consolidar flujos de seguimiento, recibir alertas y aprovechar las herramientas de la plataforma para supervisar presencia y movimiento del dispositivo.

Para saber más sobre Plaspy y cómo facilita la integración de dispositivos visite https://www.plaspy.com. Para detalles específicos del dispositivo, notas de firmware y comandos del fabricante consulte los recursos oficiales de Carscop en http://www.carscop.com/ ya que las especificaciones y métodos de configuración pueden cambiar con el tiempo.
