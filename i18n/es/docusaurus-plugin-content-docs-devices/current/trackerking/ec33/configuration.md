---
slug: /trackerking/ec33/configuration
id: ec33-configuration
sidebar_label: Configuration
title: TrackerKing - EC33 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TrackerKing EC33 para apuntarlo a Plaspy y habilitar seguimiento y telemetría en tiempo real
keywords:
  - TrackerKing EC33
  - configuración EC33
  - configurar EC33 para Plaspy
  - configuración protocolo GT06
  - configuración servidor Plaspy
  - configuración rastreador GPS
  - rastreo de vehículo EC33
  - guía integración EC33
  - ajustes servidor EC33
  - rastreo de flotas EC33
---

# TrackerKing - Configuración del EC33

Esta página ofrece el contexto público de configuración para usar el TrackerKing EC33 con Plaspy. Resume los valores de servidor prácticos y el flujo de trabajo necesario para apuntar un EC33 a Plaspy y que el dispositivo pueda transmitir posiciones, eventos y telemetría hacia la plataforma en tiempo real. Use esta guía junto con la documentación del producto TrackerKing para los pasos específicos del dispositivo.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto para todos los dispositivos que soporta, detectando automáticamente el protocolo del rastreador cuando llega la telemetría. Los pasos de configuración en el lado del fabricante para el EC33 pueden variar según la versión de firmware, revisión de hardware, método de instalación o la herramienta del proveedor utilizada para aplicar cambios, así que confirme cualquier comando o menú específico del dispositivo con la documentación de TrackerKing antes de realizar modificaciones.

## Resumen de la configuración

Configurar un EC33 para Plaspy consiste principalmente en dirigir el dispositivo al servidor de Plaspy y garantizar conectividad celular fiable para que el rastreador pueda enviar flujos de ubicación y eventos en tiempo real. El EC33 usa el protocolo GT06 para compatibilidad amplia y soporta funciones como caché local y retransmisión en áreas sin cobertura que mejoran la continuidad de los datos.

- Apunte la entrada de servidor del EC33 a Plaspy para que la telemetría llegue al endpoint correcto.  
- Configure el puerto de comunicación y el transporte (UDP o TCP) que el rastreador usará para conectarse a Plaspy.  
- Verifique la conectividad celular y el plan de datos para que el dispositivo pueda establecer y mantener la sesión.  
- Guarde y aplique la configuración, luego confirme que el rastreador informa a Plaspy y que las posiciones y eventos aparecen en la plataforma.  
- Valide la reproducción del historial almacenado en caché tras una interrupción de red para asegurarse de que los puntos recuperados se entreguen a Plaspy.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP are both supported on port 8888  
- Protocol handling: Plaspy automatically detects the tracker protocol when the device connects  
- Note: All devices in Plaspy use the same port so configuring port 8888 is consistent across models

## Requisitos típicos antes de comenzar

- Confirme que el EC33 tenga una tarjeta SIM activa con un plan de datos vigente y que haya cobertura 4G en el lugar de instalación.  
- Asegúrese de que el EC33 esté alimentado y cableado correctamente según la instalación prevista en el vehículo.  
- Obtenga acceso a las herramientas de configuración de TrackerKing o al método recomendado por el fabricante para el EC33, como configuración por USB, la app del proveedor u otras utilidades oficiales.  
- Tenga a mano los datos de su cuenta Plaspy o la información de incorporación de la flota para validar el dispositivo después de la configuración.  
- Verifique la versión de firmware actual del EC33 y revise las notas de lanzamiento de TrackerKing por si hay cambios en la configuración del servidor.  
- Puede ser necesario acceso físico al dispositivo para aplicar ciertos cambios de configuración o reiniciar la unidad.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el EC33 envía arreglos de posición, eventos de estado y telemetría al endpoint compartido de Plaspy en el puerto común. Plaspy interpreta las cargas del protocolo GT06 y presenta mapas en vivo, alertas e historial de viajes. Debido a que el EC33 soporta caché en el dispositivo y retransmisión para zonas sin cobertura, los puntos históricos recuperados se envían a Plaspy una vez que se restablece la conectividad.

- El EC33 se configura para reportar a d.plaspy.com (o 54.85.159.138) en el puerto 8888.  
- El transporte de datos puede usar UDP o TCP según las opciones del dispositivo; configure el mismo transporte en el rastreador.  
- Plaspy detecta automáticamente el protocolo GT06 y otros protocolos soportados, por lo que la plataforma analizará la telemetría entrante de forma automática.  
- Eventos como cambios de ignición, violación de geocercas, exceso de velocidad y alarmas se reenvían a Plaspy para alertas e informes.  
- Las rutas almacenadas en caché en el EC33 se transmiten a Plaspy después de la reconexión para disponer de un historial completo.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de TrackerKing para el EC33 (herramienta USB, app del proveedor u otra utilidad del fabricante).  
2. Localice los ajustes de servidor u host remoto en la interfaz de configuración del dispositivo.  
3. Ingrese el servidor Plaspy como dominio d.plaspy.com o la IP del servidor 54.85.159.138.  
4. Configure el puerto del dispositivo en 8888.  
5. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte.  
6. Aplique o guarde la configuración y siga cualquier instrucción del dispositivo para confirmar los cambios.  
7. Reinicie el EC33 si la herramienta de configuración o el firmware lo requieren para establecer una nueva conexión.  
8. Verifique que el rastreador haya reportado a Plaspy comprobando las posiciones GPS y eventos entrantes en su cuenta Plaspy o en la vista de la plataforma.

## Comandos de configuración de ejemplo

El EC33 admite múltiples métodos de configuración y los comandos o pasos de menú exactos dependen del firmware de TrackerKing y de la herramienta utilizada. Las herramientas del fabricante pueden ofrecer comandos por SMS, una utilidad de escritorio por USB o una interfaz de app. Dado que los comandos específicos del modelo pueden cambiar con el firmware y las herramientas del proveedor, siga la guía oficial de TrackerKing para la sintaxis y el orden exacto de los comandos.

Si utiliza comandos SMS proporcionados por el proveedor o una herramienta de configuración por USB, aplique los valores del servidor Plaspy de esta página (d.plaspy.com o 54.85.159.138, puerto 8888, UDP/TCP) en los campos correspondientes de servidor/host y puerto.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de los menús y el lugar exacto donde se ingresan los ajustes de servidor; confirme siempre con las notas de la versión del EC33.  
- TCP puede ser preferible cuando se desea confiabilidad de sesión y retransmisión; UDP es más liviano y se usa comúnmente para telemetría de rastreadores. Elija el transporte según su red y las capacidades del dispositivo.  
- El EC33 soporta almacenamiento en caché y retransmisión en áreas sin cobertura; después de configurar el servidor, pruebe la reproducción del historial para verificar los puntos recuperados.  
- Las opciones de IP dual y bloqueo de IP mencionadas en materiales de TrackerKing pueden usarse para redundancia; configure primero el endpoint principal de Plaspy y consulte la documentación de TrackerKing para el comportamiento del servidor secundario.  
- Mantenga una copia de cualquier comando de configuración o plantilla SMS que utilice y etiquete claramente los marcadores de posición para futuros despliegues.

## Por qué usar Plaspy con esta configuración

Apuntar un TrackerKing EC33 a Plaspy ofrece una vía práctica para obtener visibilidad de vehículos en tiempo real, monitoreo de eventos y reproducción del historial de rutas para flotas y seguimiento de vehículos individuales. La detección automática de protocolos de Plaspy y el puerto compartido simplifican la integración, de modo que puede estandarizar un único endpoint de servidor para múltiples modelos mientras sigue recibiendo telemetría y flujos de eventos completos desde el EC33.

Learn more about how Plaspy handles device integrations and fleet workflows at https://www.plaspy.com. For the most current device specific commands, firmware notes, and setup instructions for the TrackerKing EC33 consult the manufacturer site at https://trackerking.cn/ to verify methods and behavior have not changed.
