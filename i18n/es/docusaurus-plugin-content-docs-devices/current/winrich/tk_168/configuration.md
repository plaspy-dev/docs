---
slug: /winrich/tk_168/configuration
id: tk_168-configuration
sidebar_label: Configuration
title: Winrich - TK-168 Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica de configuración del Winrich TK-168 para integrarlo con Plaspy, con comandos SMS públicos y ajustes de servidor
keywords:
  - Configuración Winrich TK-168
  - Instalación Winrich TK-168
  - Configuración TK-168 Plaspy
  - Configuración servidor TK-168
  - Configuración rastreador GPS Winrich
  - Configuración rastreador Plaspy
  - Comandos SMS rastreador GPS
  - Configuración seguimiento vehicular
  - Configuración GPRS TK-168
  - Integración seguimiento de flotas
---

# Winrich - TK-168 Configuración

Esta página describe el contexto público de configuración para usar el rastreador Winrich TK-168 con Plaspy. Compila los pasos de configuración y los comandos SMS públicos conocidos que preparan al TK-168 para enviar ubicación y telemetría a Plaspy, permitiendo el monitoreo en vivo y la reproducción histórica. Use esta guía para entender el proceso general y los ajustes del servidor Plaspy que deberá aplicar al dispositivo.

Plaspy utiliza configuraciones de servidor compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; no obstante, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK-168 soporta modos SMS y GPRS y puede configurarse mediante comandos SMS como se muestra más abajo; compare siempre esta orientación pública con la documentación del fabricante para detectar variaciones específicas del dispositivo.

## Resumen de la configuración

Configurar el TK-168 para Plaspy prepara el rastreador para comunicarse de forma fiable con la plataforma y verifica que la ubicación y la telemetría sean visibles en su cuenta. Los pasos siguientes se enfocan en asegurarse de que el dispositivo tenga el APN y el endpoint de servidor correctos, elegir el transporte y validar la conectividad.

- Configure el APN del dispositivo y las credenciales para que el TK-168 pueda establecer una sesión de datos GPRS y enviar reportes a Plaspy.
- Apunte el rastreador al endpoint del servidor Plaspy para que la telemetría llegue a la plataforma en tiempo real y para las alertas.
- Elija el transporte (UDP o TCP) si el dispositivo lo requiere y guarde la configuración para que el equipo use el protocolo correcto.
- Configure el intervalo de reporte y los eventos para que el rastreador envíe la frecuencia de actualizaciones deseada.
- Verifique la configuración y revise el estado del dispositivo utilizando los comandos de verificación para confirmar la conectividad con Plaspy.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos típicos antes de empezar

- Una unidad TK-168 instalada y con alimentación, con acceso al arnés de alimentación del vehículo o alimentación de banco para la configuración inicial.
- Una tarjeta SIM activa con datos habilitados y los ajustes de APN correctos para el operador móvil.
- Capacidad de enviar y recibir SMS en la SIM si utilizará comandos SMS para programar el dispositivo.
- Acceso a la lista de comandos SMS de Winrich o al método de configuración oficial del fabricante correspondiente a su revisión de firmware.
- Conocimientos básicos del APN de su operador y de los valores opcionales de usuario y contraseña del APN, representados por marcadores como {{apn}}, {{apnu}} y {{apnp}}.
- Cobertura de red en el área de instalación para permitir el registro en GPRS y el envío de datos.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TK-168 envía ubicación y telemetría al endpoint y puerto compartidos del servidor Plaspy para que el dispositivo sea visible y administrable en la plataforma. Plaspy ingiere esos mensajes entrantes, determina automáticamente el protocolo del rastreador y expone los datos para seguimiento en vivo, alertas y análisis histórico.

- El rastreador se configura para reportar al dominio o IP del servidor Plaspy y al puerto compartido usado por todos los dispositivos Plaspy.
- Los reportes se envían por el transporte elegido (UDP o TCP) en el puerto 8888 según la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica los mensajes para mostrar la posición en el mapa y la telemetría.
- Las funciones de la plataforma, como alertas, reproducción de rutas e informes, quedan disponibles una vez que el dispositivo se registra y comienza a enviar datos.
- Los eventos del dispositivo configurados en el rastreador (por ejemplo SOS o inmovilizador) se reenvían a Plaspy conforme ocurren.

## Flujo común de configuración

1. Acceda al método de configuración oficial de Winrich para su unidad, normalmente comandos SMS o la herramienta del proveedor recomendada por el fabricante.
2. Confirme o ingrese el servidor de Plaspy ya sea como dominio d.plaspy.com o como la IP 54.85.159.138 según el formato de comando que acepte el dispositivo.
3. Establezca el puerto en 8888; recuerde que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
5. Configure el APN y cualquier usuario o contraseña opcional para que el dispositivo pueda establecer sesión GPRS.
6. Aplique o guarde la configuración y reinicie el rastreador si el dispositivo lo requiere o si Winrich lo recomienda.
7. Valide la conectividad comprobando que el dispositivo reporte a Plaspy y usando los comandos de verificación del equipo para confirmar ajustes y estado.

## Ejemplos de comandos de configuración

El TK-168 puede configurarse enviando mensajes SMS al dispositivo. Los comandos abajo son los comandos SMS públicos comúnmente utilizados para la configuración inicial. Preserve los marcadores y reemplácelos por los valores de su operador donde se indica.

- Restauración de fábrica (paso inicial opcional)
```text
940#
```

- Ajustar la zona horaria a UTC+0
```text
801#W0#
```

- Configurar el APN del operador
```text
802#{{apn}}#{{apnu}}#{{apnp}}#
```
Nota: Mantenga los marcadores {{apn}}, {{apnu}} y {{apnp}} tal como aparecen. Reemplace {{apn}} con el APN de su operador móvil. Si su operador no requiere usuario ni contraseña, puede dejar {{apnu}} y {{apnp}} vacíos u omitir esos campos según la sintaxis de comandos del dispositivo.

- Establecer el servidor GPRS a Plaspy por IP y puerto
```text
803#54.85.159.138#8888#
```
Alternativamente puede configurar el servidor por dominio si el dispositivo acepta dominios en lugar de direcciones IP; d.plaspy.com es el dominio del servidor Plaspy.

- Fijar el intervalo de actualización a 60 segundos
```text
730#60#
```

- Revisar la configuración actual
```text
886#
```

- Consultar el estado del dispositivo
```text
902#
```

Estos comandos se proporcionan en el conjunto público de Winrich. Aplíquelos en el orden que sea apropiado para su instalación; la restauración de fábrica es opcional y normalmente se usa sólo para borrar configuraciones previas cuando es necesario.

## Notas sobre la configuración

- La configuración por SMS es un método soportado para el TK-168; asegúrese de que el número de control SMS del dispositivo sea accesible y que la SIM tenga SMS habilitados.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o las funciones soportadas; confirme siempre los comandos con la documentación del firmware del dispositivo.
- Al elegir UDP o TCP, considere la confiabilidad de la red y el comportamiento del operador; Plaspy soporta ambos transportes y detectará el protocolo automáticamente.
- El servidor Plaspy usa el mismo puerto para todos los dispositivos, por lo que debe usar el puerto 8888 de manera consistente al configurar distintos rastreadores para la plataforma.
- Verifique cuidadosamente las credenciales del APN; un APN incorrecto impide el registro en GPRS y bloquea el envío de datos a Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el TK-168 para reportar a Plaspy ofrece visibilidad de ubicación en vivo, reporte de eventos y datos históricos en una sola plataforma que reconoce automáticamente el protocolo del rastreador. Para flotas y propietarios de vehículos, esta integración facilita la recolección de posiciones GPS, el monitoreo de eventos como activaciones de SOS o inmovilizador y la generación de informes operativos sin disposiciones de servidor complejas por dispositivo.

Para saber más sobre Plaspy y cómo su flota puede beneficiarse del seguimiento unificado y los reportes, visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamientos de firmware y detalles del fabricante más actuales, verifique la documentación oficial de Winrich en http://www.winrichgroup.com/en/.
