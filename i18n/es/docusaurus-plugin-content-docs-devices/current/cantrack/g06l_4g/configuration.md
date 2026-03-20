---
slug: /cantrack/g06l_4g/configuration
id: g06l_4g-configuration
sidebar_label: Configuration
title: CanTrack - G06L-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CanTrack G06L 4G con ajustes de servidor Plaspy y pasos prácticos
keywords:
  - Configuración CanTrack G06L 4G
  - Configuración CanTrack G06L
  - Configuración G06L Plaspy
  - Configuración rastreador GPS G06L
  - Configuración servidor CanTrack
  - Integración rastreador Plaspy
  - Configuración rastreador GPS para vehículo
  - Guía instalación seguimiento de flotas
  - Configuración telemetría G06L
  - Ajustes servidor Plaspy
---

# CanTrack - G06L-4G Configuración

Esta página documenta el contexto público de configuración para usar el rastreador vehicular CanTrack G06L 4G LTE con Plaspy. Reúne los ajustes prácticos y no propietarios que Plaspy requiere para que integradores e instaladores preparen el dispositivo y garantizen reportes fiables en las plataformas y paneles de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos del fabricante pueden variar según la revisión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor; use esta guía como referencia enfocada en Plaspy y consulte la documentación de CanTrack para instrucciones específicas del dispositivo.

## Resumen de la configuración

El objetivo de esta configuración es apuntar el G06L a los servidores de Plaspy, verificar la conectividad de red y asegurarse de que el dispositivo reporte posiciones y eventos de alarma para que se muestren correctamente en los paneles de Plaspy. Los valores públicos de servidor que se indican a continuación son los que Plaspy requiere; los comandos o herramientas del fabricante para introducir esos valores dependen del firmware y de la interfaz de configuración del equipo.

- Configure el rastreador para reportar a Plaspy usando el endpoint y el puerto compartidos para que Plaspy reciba la telemetría.
- Asegúrese de que el dispositivo tenga una conexión de datos móviles activa y que la APN sea correcta para la SIM instalada.
- Seleccione el protocolo de transporte UDP o TCP en el equipo si es necesario y guarde la configuración.
- Valide que el dispositivo esté subiendo posiciones GNSS y eventos de alarma a Plaspy y que los registros aparezcan en la plataforma.
- Mantenga el firmware y las herramientas de configuración actualizadas para evitar diferencias en la sintaxis de comandos o en la ubicación de menús.

## Ajustes del servidor de Plaspy

- Dominio de servidor: d.plaspy.com para configuración basada en DNS y uso por nombre de host
- IP de servidor: 54.85.159.138 para configuración directa por IP cuando sea necesario
- Puerto: 8888 que Plaspy utiliza para todos los dispositivos soportados
- Transporte: soporte tanto UDP como TCP según los requisitos del equipo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos que usan el mismo puerto compartido son reconocidos por la plataforma

## Requisitos típicos antes de la configuración

- Confirme que el G06L tiene alimentación y está cableado o conectado según la guía de instalación del fabricante
- SIM activa con datos móviles habilitados y APN configurada correctamente para el operador instalado
- Acceso al método oficial de configuración de CanTrack para su variante de dispositivo, como herramienta USB, comandos SMS o gestión OTA donde esté soportada
- Conocer si el firmware del dispositivo espera un dominio o una dirección IP al configurar el endpoint del servidor
- Un plan de pruebas para validar que el dispositivo reporte posiciones GNSS y eventos de alarma a Plaspy después de la configuración

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el G06L envía actualizaciones de posición GNSS, notificaciones de eventos y telemetría del dispositivo al endpoint de Plaspy usando el puerto compartido. Plaspy recibe esos mensajes y los relaciona con el registro de dispositivo correspondiente para que posiciones, alarmas y rutas históricas sean visibles en la plataforma.

- El dispositivo se configura para reportar a d.plaspy.com o 54.85.159.138 usando el puerto 8888
- Elija UDP o TCP como transporte si el firmware del rastreador solicita selección de protocolo
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta el protocolo automáticamente
- Los mensajes de posición y evento son recibidos por Plaspy y mostrados en los paneles para monitoreo y alertas
- El almacenamiento local del dispositivo almacena registros durante interrupciones de red y los sube a Plaspy cuando se restablece la conectividad

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de CanTrack para su G06L 4G mediante la herramienta USB proporcionada, comandos SMS o la interfaz web según documente el fabricante.
2. En la configuración de servidor introduzca el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según la opción que soporte su equipo.
3. Establezca el puerto del servidor en 8888, que es el puerto usado por Plaspy para todos los dispositivos.
4. Si el equipo requiere selección de transporte, elija UDP o TCP según la preferencia del instalador o la guía del firmware.
5. Guarde o aplique la configuración en la herramienta o conjunto de comandos del fabricante.
6. Reinicie el dispositivo si el firmware exige un reinicio para que los ajustes de red entren en efecto.
7. Valide que el rastreador reporta a Plaspy revisando los datos entrantes en su cuenta de Plaspy y confirmando que llegan registros de posición y eventos.

## Ejemplos de comandos de configuración

El G06L soporta múltiples interfaces de configuración y CanTrack proporciona herramientas y conjuntos de comandos que varían según el firmware. Los comandos exactos difieren por firmware y herramienta, por lo que debe consultar la guía oficial de configuración de CanTrack para la sintaxis específica del dispositivo. Para Plaspy, normalmente ingresará los mismos valores de servidor indicados arriba, ya sea como nombre de host o como IP junto con el puerto compartido 8888. Si su firmware usa comandos SMS o una consola serial, el formato de los comandos provendrá de la documentación de CanTrack.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de comandos y la ubicación de menús, por lo que debe coincidir las instrucciones con la versión de firmware del equipo antes de aplicar ajustes.
- La elección entre UDP y TCP depende de la preferencia del instalador y de las condiciones de la red; Plaspy soporta ambos y detectará el protocolo automáticamente.
- Use el dominio d.plaspy.com siempre que sea posible para que cambios en DNS puedan gestionarse sin reconfigurar dispositivos; utilice 54.85.159.138 solo cuando se requiera una IP directa.
- Dado que Plaspy utiliza el mismo puerto para todos los dispositivos, no necesita valores de puerto específicos por modelo al integrar múltiples rastreadores.
- Mantenga actualizadas las herramientas USB y las utilidades OTA del fabricante para asegurar compatibilidad con los flujos de configuración más recientes.

## Por qué usar Plaspy con esta configuración

Configurar el CanTrack G06L para reportar a Plaspy ofrece visibilidad en tiempo real y confiable de vehículos y flotas al entregar posiciones GNSS, eventos de encendido y movimiento, y notificaciones de alarma en una plataforma centralizada. La conectividad LTE con fallback a GSM del G06L y su almacenamiento local se complementan bien con la ingesta centralizada de Plaspy, de modo que los equipos de operaciones puedan monitorear activos, recibir alertas de eventos y analizar rutas históricas.

Para saber más sobre Plaspy visite https://www.plaspy.com y para obtener las instrucciones específicas del dispositivo, notas de firmware y herramientas de configuración más recientes, verifique los detalles con el fabricante en https://www.cantrackgps.com/. El comportamiento del firmware del dispositivo y los métodos de configuración del fabricante pueden cambiar con el tiempo, por lo que siempre confirme los pasos actuales en la documentación oficial de CanTrack antes del despliegue.
