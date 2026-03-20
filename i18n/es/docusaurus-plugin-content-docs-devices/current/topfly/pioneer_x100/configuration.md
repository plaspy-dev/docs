---
slug: /topfly/pioneer_x100/configuration
id: pioneer_x100-configuration
sidebar_label: Configuration
title: TopFly - Pioneer X100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TopFly Pioneer X100 y apuntarlo a Plaspy con ejemplos por SMS y ajustes de servidor
keywords:
  - Configuración TopFly Pioneer X100
  - Configuración Pioneer X100
  - Configuración rastreador TopFly
  - Configuración Pioneer X100 Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Configuración servidor rastreador
  - Configuración SMS Pioneer X100
  - Ajustes servidor Plaspy
  - Integración seguimiento de flotas
---

# TopFly - Configuración del Pioneer X100

Esta página explica el contexto público de configuración para usar el TopFly Pioneer X100 con Plaspy. Incluye los ajustes compartidos del servidor Plaspy, describe los pasos prácticos que puede seguir para preparar el rastreador y ofrece comandos SMS de ejemplo que se usan comúnmente para este modelo según la documentación pública disponible.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que trate los comandos y el flujo aquí como una referencia práctica pública y no como un manual exhaustivo del fabricante.

## Resumen de configuración

El objetivo al configurar un Pioneer X100 para Plaspy es asegurar que el rastreador pueda alcanzar el servidor de Plaspy y reportar de forma confiable datos de ubicación y eventos. La configuración define el APN y el servidor GPRS, selecciona el transporte y habilita reportes periódicos para que el dispositivo sea visible y gestionable en Plaspy.

- Configure el APN del dispositivo y las credenciales de la SIM necesarias para que el rastreador tenga conexión de datos activa.
- Apunte el equipo al endpoint del servidor Plaspy para permitir la ingestión en la plataforma.
- Seleccione el tipo de transporte si el firmware del equipo lo requiere (UDP o TCP) para ajustarse a la red y al servidor.
- Defina intervalos de reporte o temporizadores para que las actualizaciones de ubicación cumplan requerimientos operativos.
- Valide la conectividad y que el dispositivo aparezca en Plaspy tras la configuración.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured to use UDP or TCP on port 8888
- Protocol handling: Plaspy automatically detects the tracker protocol when the device connects and all devices use the same port for Plaspy ingestion

## Requisitos típicos antes de la configuración

- Alimentación constante al Pioneer X100 durante la configuración y las pruebas.
- Tarjeta SIM activa con plan de datos y los detalles de APN correctos del operador móvil.
- Acceso al rastreador mediante el método oficial de configuración del fabricante que tenga disponible (SMS, herramienta de configuración o software de instalador).
- Conocimiento de la contraseña por defecto del dispositivo si usa configuración por SMS; el ejemplo público que sigue usa 0000 como contraseña por defecto.
- Una cuenta en Plaspy o acceso a su instancia de Plaspy para confirmar la visibilidad del dispositivo después de la configuración.
- Un procedimiento de pruebas para validar los reportes y el comportamiento de alarmas tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el Pioneer X100 envía datos de ubicación y eventos al endpoint y puerto compartidos de ingestión de Plaspy para que la plataforma pueda mostrar activos y sucesos. El rastreador usará el APN configurado para datos GPRS y luego abrirá conexión con el servidor de Plaspy.

- El rastreador debe estar configurado para reportar a d.plaspy.com o al IP 54.85.159.138 en el puerto 8888.
- Puede optar por UDP o TCP como transporte cuando el firmware lo solicite.
- Plaspy detecta automáticamente el protocolo que usa el rastreador cuando llegan datos al puerto 8888.
- Tras la configuración, el dispositivo transmite actualizaciones periódicas según los temporizadores configurados para que el activo sea visible en Plaspy.
- Los eventos y alarmas reportados por el rastreador se reenviarán a Plaspy para monitoreo y análisis.

## Flujo típico de configuración

1. Acceda al método o software de configuración oficial de TopFly apropiado para su dispositivo y firmware, por ejemplo comandos SMS o la herramienta del proveedor.
2. Ingrese el nombre de host del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en la opción de servidor o IP del equipo.
3. Configure el puerto del servidor en 8888 que Plaspy utiliza para todos los dispositivos.
4. Seleccione UDP o TCP si el dispositivo requiere elegir el tipo de transporte.
5. Configure el APN y las credenciales de la SIM para que el rastreador establezca la conexión de datos.
6. Aplique o guarde la configuración en el equipo y reinicie el rastreador si el firmware exige un reinicio para que los cambios entren en vigor.
7. Verifique que el rastreador reporte a Plaspy y que aparezca en su cuenta o tablero de Plaspy.

## Ejemplos de comandos de configuración

Para configurar el Pioneer X100 por SMS, envíe los comandos siguientes en el orden indicado. El ejemplo público usa la contraseña por defecto del dispositivo 0000. Reemplace los marcadores y valores según su SIM y configuración.

- Establecer la zona horaria a UTC 0
```
GMT,0000,0#
```

- Configurar el APN del operador y el usuario y contraseña del APN opcionales
```
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
Nota: {{apn}} es el nombre del punto de acceso de su operador móvil. {{apnu}} y {{apnp}} son marcadores opcionales para usuario y contraseña del APN; déjelos en blanco si su operador no los requiere.

- Establecer el servidor GPRS con la IP y el puerto de Plaspy
```
IP,0000,54.85.159.138 8888#
```
Como alternativa, puede apuntar el dispositivo a d.plaspy.com si el equipo acepta un nombre de host.

- Establecer el intervalo de actualizaciones a 60 segundos
```
TIMER,0000,60:60:0:0#
```

Estos comandos SMS respetan el orden mostrado porque las configuraciones de APN y servidor deben estar en su lugar antes de validar los reportes hacia Plaspy.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis exacta de los comandos y las opciones disponibles; consulte las notas de la versión del firmware cuando sea posible.
- Este modelo soporta públicamente la configuración por SMS como se muestra, pero las herramientas de instalador de TopFly o una utilidad de configuración pueden ofrecer opciones adicionales o interfaz gráfica.
- La elección entre TCP y UDP puede depender de las condiciones de la red y el comportamiento del operador; ambos transportes son compatibles para conectar con Plaspy en el puerto 8888.
- Conserve los marcadores {{apn}}, {{apnu}} y {{apnp}} tal como aparecen al preparar los comandos y sustitúyalos por los valores de su operador.
- El ejemplo usa la contraseña pública por defecto 0000 en los comandos donde se requiere; considere asegurar el equipo según las recomendaciones del fabricante después de la configuración inicial.

## Por qué usar Plaspy con esta configuración

Configurar el TopFly Pioneer X100 para que reporte a Plaspy aporta visibilidad centralizada para el monitoreo de flotas y activos, permitiendo recibir actualizaciones de ubicación, alarmas y eventos en una única plataforma. El endpoint de ingestión compartido de Plaspy simplifica la incorporación de dispositivos porque la plataforma detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los equipos compatibles.

Para obtener más información sobre Plaspy y cómo gestiona la ingestión de dispositivos y la administración de flotas, visite https://www.plaspy.com. Los métodos de configuración del fabricante, el comportamiento del firmware y los detalles de instalación pueden cambiar con el tiempo, por lo que verifique la documentación específica más reciente en https://www.topflytech.com/ antes de realizar despliegues masivos o actualizaciones críticas.
