---
slug: /cantrack/tk06a/configuration
id: tk06a-configuration
sidebar_label: Configuration
title: CanTrack - TK06A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar CanTrack TK06A con Plaspy usando ajustes de servidor compartido y comandos SMS o GPRS
keywords:
  - Configuración CanTrack TK06A
  - Configuración TK06A
  - Configuración servidor TK06A
  - Configuración TK06A Plaspy
  - Configuración rastreador GPS CanTrack
  - Configuración GPRS TK06A
  - Configuración rastreador de vehículo TK06A
  - Rastreo de flotas TK06A
  - Ajustes servidor rastreador GPS
  - Configuración rastreador Plaspy
---

# CanTrack - Configuración del TK06A

Esta página ofrece una guía pública para configurar el CanTrack TK06A con Plaspy. Resume los pasos prácticos y los comandos SMS públicos que se usan comúnmente para apuntar un TK06A al servidor de Plaspy, de modo que el dispositivo pueda enviar ubicación y estado vía GPRS. El contenido se centra en los valores de servidor compartidos y en el flujo general de configuración, en lugar de instrucciones propietarias o dependientes del proveedor.

Plaspy utiliza ajustes de servidor comunes entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK06A admite configuración por SMS y GPRS según la documentación pública, por lo que esta página incluye ejemplos de comandos SMS que siguen ese patrón público de configuración.

## Resumen de configuración

Configurar un TK06A para Plaspy prepara el equipo para enviar sus datos GPS a un endpoint central del servidor, de modo que pueda visualizarse y administrarse en la plataforma Plaspy. El objetivo es asegurar que el dispositivo tenga la APN correcta, una dirección de servidor y puerto accesibles, y el protocolo de transporte elegido para que Plaspy pueda aceptar y procesar sus mensajes.

- Configure el dispositivo para usar el endpoint y puerto del servidor de Plaspy para que las subidas GPRS lleguen a la plataforma.
- Verifique o establezca la APN y las credenciales del operador necesarias para la conexión de datos móviles.
- Seleccione UDP o TCP como transporte en el equipo si es necesario, según las necesidades de fiabilidad de la red.
- Valide que el dispositivo informe a Plaspy después de aplicar los ajustes para que aparezca en la plataforma.
- Opcionalmente, utilice comandos SMS cuando el dispositivo lo permita para configuración y verificación remota.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Una unidad TK06A encendida y funcional con acceso a la ranura SIM y alimentación externa según sea necesario
- Una tarjeta SIM activa con datos móviles GPRS habilitados y la información de APN del operador disponible
- Acceso al método oficial de configuración de CanTrack para el TK06A, como la interfaz de comandos SMS o el software del fabricante
- Conocimiento de la contraseña del dispositivo; los ejemplos públicos usan la contraseña por defecto 123456
- Capacidad para enviar y recibir SMS hacia el dispositivo para configuración remota si se emplean comandos SMS
- Un plan para probar la conectividad tras la configuración confirmando que el dispositivo informa a Plaspy

## Cómo se conecta este rastreador a Plaspy

El TK06A envía datos GPS y de estado del dispositivo a través de la red GSM usando GPRS al endpoint y puerto de servidor configurados. Al apuntarlo a Plaspy, los datos del dispositivo se encaminan al endpoint compartido de Plaspy para que puedan procesarse y mostrarse en la plataforma.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy
- Los datos se transmiten por GPRS a d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888
- El dispositivo puede usar transporte UDP o TCP para enviar paquetes a Plaspy
- Plaspy detecta automáticamente el protocolo del rastreador y parsea los mensajes entrantes
- Una vez que reporta, el dispositivo brinda visibilidad, reporte de eventos y monitoreo operativo dentro de Plaspy

## Flujo de configuración común

1. Acceda al método oficial de configuración del fabricante o al software para el TK06A (comandos SMS o herramienta del proveedor).
2. Proporcione la APN del operador y las credenciales requeridas utilizando el método del dispositivo.
3. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como servidor GPRS.
4. Establezca el puerto del servidor en 8888.
5. Seleccione UDP o TCP en el dispositivo si requiere elegir el transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los cambios tengan efecto.
7. Valide que el dispositivo informe a Plaspy y aparezca en la plataforma.

## Comandos de ejemplo de configuración

El TK06A puede configurarse mediante comandos SMS según ejemplos públicos del fabricante. Los comandos a continuación conservan los marcadores de posición públicos y la contraseña por defecto del dispositivo usada en el ejemplo. Reemplace [apn], [apnu] y [apnp] con la APN, el nombre de usuario de la APN y la contraseña de la APN de su operador según corresponda.

1. Restaurar ajustes de fábrica (paso inicial opcional)
```
#begin#123456#
```

2. Establecer la zona horaria a UTC+0
```
#timezone#123456#W#0#00#
```

3. Configurar la APN del operador (reemplazar los marcadores según sea necesario)
```
#apn#123456#[apn]#[apnu]#[apnp]#
```
- [apn] = la APN de su operador móvil
- [apnu] = nombre de usuario de la APN si el operador lo requiere (dejar en blanco si no)
- [apnp] = contraseña de la APN si el operador la requiere (dejar en blanco si no)

4. Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto
```
#IP#123456#54.85.159.138#8888#
```

5. Ejemplo de comando de verificación mostrado en la guía pública (usado para comprobar ajustes o modo)
```
TCP
```
- El comando de verificación de ejemplo anterior fue provisto en ejemplos públicos de configuración del dispositivo. Siga la guía del fabricante para la semántica exacta del comando de verificación.

Nota: Los comandos de muestra usan la contraseña por defecto del dispositivo 123456 en los ejemplos públicos. Si su contraseña ha sido cambiada, utilice la contraseña actual en lugar de 123456.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware del fabricante pueden cambiar los formatos de comandos o las opciones disponibles; confirme siempre con la documentación del fabricante.
- La configuración por SMS es comúnmente soportada según los ejemplos públicos del TK06A; las herramientas del proveedor o el software de configuración pueden ofrecer flujos alternativos.
- Al seleccionar el transporte, UDP puede ser preferible por su menor sobrecarga, mientras que TCP puede ofrecer entrega más fiable en ciertas redes; elija según el comportamiento de la red.
- Mantenga los marcadores de APN [apnu] y [apnp] solo si su operador los exige; de lo contrario, omítalos o déjelos en blanco conforme al formato de comandos del dispositivo.
- Plaspy usa el mismo puerto entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, así que apunte el dispositivo a d.plaspy.com o a la IP y puerto del servidor indicados más arriba.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el CanTrack TK06A ofrece una forma directa de centralizar datos de ubicación de vehículos y activos desde dispositivos configurados para enviar actualizaciones GPRS. Apuntar el TK06A al endpoint compartido de Plaspy permite a las organizaciones obtener visibilidad en tiempo real y monitoreo operativo sin mantener infraestructura de servidor personalizada.

Para obtener más información sobre Plaspy y cómo gestiona las conexiones de dispositivos y la visibilidad de flotas, visite https://www.plaspy.com. Los métodos específicos de configuración del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que verifique los detalles y formatos de comandos más recientes con el fabricante en https://www.cantrackgps.com/.
