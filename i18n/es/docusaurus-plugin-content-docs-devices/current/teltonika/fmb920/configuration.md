---
slug: /teltonika/fmb920/configuration
id: fmb920-configuration
sidebar_label: Configuration
title: Teltonika - FMB920 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Teltonika FMB920 para Plaspy con ajustes de servidor, comandos de ejemplo y pasos de instalación
keywords:
  - Configuración Teltonika FMB920
  - Instalación Teltonika FMB920
  - FMB920 Plaspy
  - Configuración rastreador Plaspy
  - Ajustes de servidor FMB920
  - Configuración rastreador GPS Teltonika
  - Configuración seguimiento vehicular
  - Rastreador para gestión de flotas
  - Guía configuración rastreador GPS
  - Comandos Teltonika FMB920
---

# Teltonika - FMB920 Configuración

Esta página documenta el contexto de configuración pública para usar el Teltonika FMB920 con Plaspy. Se enfoca en los ajustes del servidor Plaspy que usted debe aplicar al dispositivo y ofrece un ejemplo práctico de comando que puede utilizarse con los métodos de configuración de Teltonika. El contenido a continuación usa únicamente parámetros públicos y el comando de ejemplo provisto para este modelo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del equipo; los pasos exactos que realice en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de Teltonika que utilice. Use las herramientas de Teltonika o la configuración por SMS según la guía de instalación del dispositivo y confirme cualquier detalle específico del equipo en la documentación del fabricante.

## Resumen de la configuración

Preparar el FMB920 para Plaspy implica configurar el dispositivo para que reporte al servidor de Plaspy y verificar la conectividad para que el rastreador aparezca en su cuenta. La configuración acepta un APN y parámetros de servidor y puede aplicarse mediante las herramientas de Teltonika o comandos SMS por lotes cuando están soportados.

- Configure el APN y las credenciales para que el dispositivo tenga conexión de datos móviles funcional.  
- Apunte el dispositivo al endpoint del servidor Plaspy para que la ubicación y los eventos se reenvíen a Plaspy.  
- Seleccione el protocolo de transporte si el equipo requiere una elección y establezca el puerto compartido de Plaspy.  
- Guarde y aplique la configuración, luego confirme que el dispositivo sea visible y esté reportando en Plaspy.  
- Use Teltonika Configurator, comandos SMS por lotes o las herramientas oficiales de Teltonika según corresponda para su instalación.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte UDP o TCP; elija el transporte si el dispositivo requiere selección  
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un FMB920 alimentado e instalado o en banco de pruebas con acceso a su interfaz de configuración  
- Una tarjeta SIM móvil activa con plan de datos válido y los ajustes APN correctos para la red del dispositivo  
- Acceso al método de configuración oficial de Teltonika que prefiera, como Teltonika Configurator, FOTA WEB o comandos SMS por lotes  
- Conocimiento de los ajustes del servidor Plaspy d.plaspy.com (o IP 54.85.159.138) y el puerto 8888  
- Un método para verificar que el dispositivo está reportando a Plaspy, por ejemplo revisando la lista de dispositivos o la telemetría reciente en la plataforma Plaspy

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el FMB920 envía su posición, entradas y telemetría soportada al endpoint y puerto del servidor Plaspy para que el dispositivo sea visible en la plataforma. Plaspy utiliza el puerto compartido y la detección automática de protocolo para aceptar conexiones de dispositivos Teltonika compatibles sin requerir cambios de puerto por dispositivo en el servidor.

- El rastreador establece una sesión de datos usando el APN del dispositivo y la red móvil, luego abre una conexión a d.plaspy.com en el puerto 8888  
- La telemetría y los mensajes de eventos del dispositivo se transmiten por el protocolo de transporte elegido hacia Plaspy  
- Plaspy detecta automáticamente el protocolo del rastreador y parsea los datos de posición y eventos para su visualización y reportes  
- Eventos como encendido, entradas de puerta o alarmas reportadas por el FMB920 aparecen en el panel de Plaspy para monitoreo y alertas  
- Una configuración exitosa permite reproducción histórica y actualizaciones de posición en vivo dentro de Plaspy

## Flujo de trabajo común para la configuración

1. Acceda al método oficial de configuración de Teltonika para su FMB920, como Teltonika Configurator, FOTA WEB o comandos SMS por lotes.  
2. Ingrese el nombre de host del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la sección de servidores del dispositivo.  
3. Establezca el puerto del servidor en 8888. Plaspy utiliza el mismo puerto para todos los dispositivos.  
4. Elija el transporte UDP o TCP si el dispositivo requiere selección. Plaspy detectará automáticamente el protocolo del rastreador.  
5. Aplique o guarde la configuración en el dispositivo usando la herramienta elegida o envíe el comando SMS por lotes si utiliza configuración por SMS.  
6. Reinicie el dispositivo si el método de configuración lo requiere o si la documentación de Teltonika lo recomienda.  
7. Valide que el dispositivo reporte a Plaspy revisando la conectividad del dispositivo y la telemetría entrante en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El comando de ejemplo público provisto para la configuración básica de parámetros en dispositivos Teltonika puede usarse como comando SMS por lotes o en una herramienta de Teltonika que acepte el mismo formato de parámetros. Este ejemplo configura valores APN y apunta el dispositivo a Plaspy.

- Comando SMS por lotes de ejemplo (preserve los marcadores de posición):

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre los marcadores de posición y campos en el comando:
- [apn] es el nombre del APN de la red móvil necesario para la conexión de datos.  
- [apnu] es el usuario del APN cuando su operador lo requiera.  
- [apnp] es la contraseña del APN cuando su operador lo requiera.  
- 2004 configura el host del servidor a d.plaspy.com para Plaspy; puede sustituir 54.85.159.138 si su herramienta o política requiere una IP.  
- 2005 configura el puerto del servidor en 8888, que es el puerto compartido de Plaspy.  
- 2006 se usa en esquemas de parámetros de Teltonika para controlar el transporte u opciones relacionadas en algunas versiones de firmware; verifique el mapeo numérico exacto en la documentación de Teltonika para su firmware.

Envíe esto como SMS al dispositivo o aplíquelo mediante Teltonika Configurator al importar parámetros por lotes. Consulte la documentación de Teltonika para el método exacto de envío de comandos por lotes y si su firmware requiere un agrupamiento de parámetros distinto.

## Notas sobre la configuración

- Las versiones de firmware de Teltonika pueden cambiar los IDs de parámetros y su comportamiento; verifique siempre los números y significados de los parámetros para la versión de firmware de su equipo.  
- Puede usar el dominio d.plaspy.com o la IP 54.85.159.138 cuando se requiera una IP directa; la mayoría de los instaladores prefieren el dominio por la flexibilidad del DNS.  
- Elija UDP o TCP según lo soporte su despliegue; Plaspy acepta ambos y detecta el protocolo automáticamente.  
- El comando setparam de ejemplo se suele enviar por SMS por lotes o por Teltonika Configurator según la preferencia del instalador y el acceso al dispositivo.  
- Valide la conectividad en Plaspy después de la configuración para confirmar que se reciben telemetría y eventos.

## Por qué usar Plaspy con esta configuración

Configurar el Teltonika FMB920 para reportar a Plaspy ofrece a operadores de flotas e instaladores una vía sencilla hacia la visibilidad en tiempo real, monitoreo de eventos y datos históricos de posición sin necesidad de personalizar el servidor por cada dispositivo. Usar los ajustes de servidor compartidos de Plaspy reduce la complejidad de configuración y permite que Plaspy parseé automáticamente el protocolo del rastreador.

Para saber más sobre Plaspy y cómo encaja esta configuración en flujos de trabajo de flota visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, definiciones de parámetros y comportamientos de firmware, verifique siempre la información con el fabricante en https://www.teltonika-gps.com/ ya que el comportamiento del dispositivo y el mapeo de parámetros pueden cambiar con el tiempo.
