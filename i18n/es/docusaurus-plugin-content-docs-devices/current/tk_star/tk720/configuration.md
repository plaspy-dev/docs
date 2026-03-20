---
slug: /tk_star/tk720/configuration
id: tk720-configuration
sidebar_label: Configuration
title: TK-Star - TK720 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TK-Star TK720 y conectarlo a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - Configuración TK Star TK720
  - Configuración TK720 para Plaspy
  - Configuración de rastreador TK Star
  - Configuración rastreador GPS TK720
  - Configuración de servidor TK720
  - Integración de rastreadores Plaspy
  - Configuración SMS TK720
  - Rastreo vehicular TK720
  - Ajustes APN TK720
  - Configuración servidor Plaspy
---

# TK-Star - Configuración del TK720

Esta página documenta el contexto de configuración pública para usar el TK-Star TK720 con Plaspy. Resume los ajustes prácticos y los comandos SMS más comunes para apuntar un TK720 al endpoint de Plaspy y validar la conectividad básica para el seguimiento en tiempo real y el envío de eventos. Use este contenido como referencia técnica para la compatibilidad con Plaspy y los pasos iniciales de configuración.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que el mismo endpoint y puerto de Plaspy aplica a todos los rastreadores compatibles. Los pasos de configuración por parte del fabricante para el TK720 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando sea posible, esta página incluye comandos SMS públicos y notas del fabricante para ayudarle a configurar el dispositivo para Plaspy.

## Panorama de la configuración

El objetivo de configurar el TK720 para Plaspy es dejar el rastreador listo para enviar datos de posición y eventos de forma confiable a la plataforma Plaspy y validar que esos datos sean visibles en su cuenta. La configuración normalmente implica definir el APN del dispositivo, asignar la dirección y el puerto del servidor Plaspy, seleccionar el método de transporte si es necesario y confirmar los intervalos y modos de reporte.

- Configure el APN de datos móviles y las credenciales APN si procede, para que el TK720 establezca conectividad GPRS.  
- Configure el servidor GPRS para que apunte a Plaspy usando el dominio o la IP pública y el puerto estándar de Plaspy.  
- Seleccione UDP o TCP cuando el dispositivo requiera elegir un transporte.  
- Establezca el intervalo de subida y cambie el dispositivo al modo de reporte GPRS para que envíe actualizaciones periódicas de ubicación.  
- Verifique que el dispositivo reporte a Plaspy y compruebe alertas de eventos como vibración o movimiento en la plataforma Plaspy.  
- Aplique los ajustes mediante comandos SMS del fabricante o con la herramienta oficial de configuración, según el conjunto de herramientas disponible.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Plaspy behavior: the platform automatically detects the tracker protocol and uses the same port for all supported devices

Estos valores corresponden al endpoint público de Plaspy y deben ingresarse en el dispositivo o mediante comandos SMS para que el TK720 reporte a Plaspy.

## Requisitos habituales antes de la configuración

- Un TK720 alimentado con la ranura SIM accesible y batería cargada o conectado a una fuente de energía.  
- Una tarjeta SIM GSM con datos activos (GPRS) y el APN correcto del operador móvil.  
- Acceso al método de configuración del TK720 que soporte su unidad (comandos SMS o software oficial del fabricante).  
- Conocimiento de la contraseña del dispositivo si se requiere para la configuración (los ejemplos de comandos del fabricante usan 123456 como contraseña por defecto).  
- Una cuenta de Plaspy o acceso a la plataforma Plaspy para validar que el dispositivo esté reportando correctamente.  
- Documentación del fabricante o notas de versión para su versión de firmware del TK720 para confirmar la sintaxis y el comportamiento de los comandos.

## Cómo se conecta este rastreador a Plaspy

El TK720 envía actualizaciones periódicas de posición y notificaciones de eventos al endpoint de servidor de Plaspy en el puerto compartido, de modo que los datos aparecen en los paneles, mapas e informes de Plaspy. Plaspy ingiere la telemetría y reenvía alertas y respuestas a comandos a los usuarios autorizados.

- El rastreador se configura para reportar al endpoint compartido de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.  
- El dispositivo puede usar transporte UDP o TCP en el puerto 8888 según la configuración y la preferencia del operador.  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo servidor y puerto se aplican a los rastreadores compatibles.  
- Las actualizaciones de ubicación, las alertas por vibración o movimiento y otros eventos se envían a Plaspy para su visualización y notificaciones.  
- Una vez activo el reporte, Plaspy ofrece reproducción de rutas e historial de eventos para monitoreo operativo.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del TK-Star para su TK720 (comandos SMS o la herramienta de configuración del fabricante) según la documentación del dispositivo.  
2. Ingrese la dirección del servidor de Plaspy como el dominio d.plaspy.com o la IP 54.85.159.138 según las opciones del comando o la herramienta.  
3. Establezca el puerto del servidor en 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.  
4. Elija UDP o TCP si el dispositivo requiere selección de transporte.  
5. Configure el APN y las credenciales APN necesarias para la conectividad GPRS.  
6. Aplique o guarde la configuración en el dispositivo y cambie al modo de reporte GPRS si es necesario.  
7. Reinicie el dispositivo si lo recomienda el fabricante, luego valide que el TK720 informe a Plaspy y que los datos de ubicación y eventos aparezcan en su cuenta Plaspy.

## Comandos de configuración de ejemplo

El TK720 admite configuración vía SMS mediante comandos. Los siguientes ejemplos proceden de la documentación pública del fabricante y muestran una secuencia común. La contraseña por defecto del dispositivo mostrada aquí es 123456 según el fabricante. Envíe cada comando como un mensaje SMS independiente.

- Restauración opcional a valores de fábrica (usar solo si necesita restablecer el dispositivo):
```text
begin123456
```

- Establecer el APN del operador (reemplazar [apn] por el APN de su operador):
```text
apn123456 [apn]
```

- Establecer el nombre de usuario del APN si se requiere (reemplazar [apnu] por el usuario del APN):
```text
apnuser123456 [apnu]
```

- Establecer la contraseña del APN si se requiere (reemplazar [apnp] por la contraseña del APN):
```text
apnpasswd123456 [apnp]
```

- Apuntar el servidor GPRS a Plaspy usando la IP pública y el puerto:
```text
adminip123456 54.85.159.138 8888
```
Nota: También puede poder utilizar el dominio d.plaspy.com en herramientas que acepten un nombre de host en lugar de una IP.

- Establecer el intervalo de subida a 60 segundos:
```text
upload123456 60
```

- Cambiar el dispositivo al modo de reporte GPRS:
```text
gprs123456
```

Explicación de los marcadores:
- [apn] — la cadena APN de su operador móvil requerida para la conectividad de datos.  
- [apnu] — usuario del APN si su operador lo exige.  
- [apnp] — contraseña del APN si su operador la exige.

Envíe cada comando como un SMS separado, a menos que su herramienta o método de aprovisionamiento soporte comandos en lote. Confirme el éxito de los comandos mediante las respuestas del dispositivo o la aparición de reportes en Plaspy.

## Notas de configuración

- La configuración por SMS es habitualmente soportada por el TK720; siga la sintaxis del fabricante con precisión y tenga en cuenta que algunas versiones de firmware requieren formas de comando ligeramente distintas.  
- El dispositivo puede apuntar a d.plaspy.com o a la IP numérica 54.85.159.138; utilice el método que admita su herramienta de aprovisionamiento.  
- Seleccione UDP o TCP según las necesidades de la instalación; Plaspy detectará automáticamente el protocolo en el puerto compartido 8888.  
- Los campos de usuario y contraseña del APN son opcionales para muchos operadores; configúrelos solo si su proveedor los requiere.  
- Verifique siempre los comandos y las contraseñas por defecto con la documentación oficial de TK-Star para su versión de firmware.

## Por qué usar Plaspy con esta configuración

Configurar el TK720 para reportar a Plaspy ofrece a gerentes de flota y propietarios de vehículos visibilidad confiable de la telemetría de posición y eventos a través de un endpoint compartido con detección automática de protocolo. Esa visibilidad facilita la respuesta ante robos, reproducción de rutas, alertas y supervisión operativa, manteniendo la consistencia en los ajustes de conexión de Plaspy entre distintos dispositivos.

Para obtener más información sobre Plaspy y cómo la plataforma funciona con rastreadores como el TK-Star TK720 visite https://www.plaspy.com. Para comandos específicos del dispositivo, notas de firmware e indicaciones de instalación consulte la documentación actual del fabricante en https://www.tk-star.com/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
