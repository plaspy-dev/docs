---
slug: /istartek/pt32/configuration
id: pt32-configuration
sidebar_label: Configuration
title: iStartek - PT32 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el iStartek PT32 y apuntarlo a Plaspy para seguimiento confiable de mascotas
keywords:
  - configuración iStartek PT32
  - configuración servidor iStartek PT32
  - configuración PT32 para Plaspy
  - configuración rastreador GPS PT32
  - configuración rastreador iStartek
  - configuración SMS PT32
  - integración dispositivo Plaspy
  - configuración rastreador mascotas Plaspy
  - configuración plataforma PT32
  - configuración plataforma GPS
---

# iStartek - PT32 Configuración

Esta página documenta la configuración pública necesaria para usar el iStartek PT32 con la plataforma Plaspy. Reúne los ajustes de servidor compartidos y los pasos prácticos disponibles públicamente para que usted pueda apuntar un PT32 a Plaspy y confirmar que envía datos correctamente. Cuando hay comandos SMS del fabricante disponibles, se reproducen aquí para mayor claridad y conveniencia.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador del lado del servidor. Los pasos exactos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que trate los comandos aquí como un punto de partida público y verifique cualquier comportamiento específico con la documentación de iStartek.

## Resumen de la configuración

Este proceso prepara un PT32 para comunicarse con Plaspy registrando sus parámetros GPRS, APN, servidor y temporizador de reporte. El objetivo es asegurar que el dispositivo tenga conectividad de datos móviles, el destino de servidor correcto y una cadencia de reporte acorde a sus necesidades de monitoreo.

- Configure el APN y los parámetros de red GPRS para que el dispositivo use datos móviles.
- Apunte el PT32 al endpoint de servidor de Plaspy para que los reportes lleguen a la plataforma.
- Seleccione el modo de transporte si es necesario y ajuste el intervalo de reporte para actualizaciones en tiempo real.
- Valide la conectividad y verifique el dispositivo en Plaspy para confirmar telemetría y alertas.
- Use los comandos SMS del fabricante o la herramienta oficial para aplicar la configuración.

## Ajustes de servidor de Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte.

## Requisitos típicos antes de empezar

- Un PT32 con batería cargada suficiente para completar la configuración y las pruebas iniciales.
- Una tarjeta SIM móvil válida instalada y activa para datos GPRS y comandos SMS.
- Conocimiento del APN del operador móvil y de las credenciales de APN si fueran necesarias.
- Acceso a la interfaz de comandos SMS del iStartek o a la herramienta oficial de configuración del fabricante.
- Un método para recibir respuestas SMS de confirmación o para observar la actividad del dispositivo en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El PT32 envía ubicación y estado del dispositivo a Plaspy a través de la red móvil usando el endpoint y puerto GPRS configurados. Una vez apuntado a Plaspy, reporta actualizaciones periódicas de posición y notificaciones de eventos para visibilidad y monitoreo.

- El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy.
- Los reportes se envían por UDP o TCP según la selección de transporte del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador e ingiere los mensajes de ubicación y estado.
- Temporizadores periódicos controlan la frecuencia de envío de actualizaciones para visibilidad en tiempo real.
- Las alertas y eventos aparecen en los paneles de Plaspy y en los canales de notificaciones.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración iStartek para el PT32, normalmente comandos SMS o la herramienta del proveedor.
2. Ingrese el APN del operador móvil usando el comando APN proporcionado por el fabricante.
3. Apunte el dispositivo al servidor de Plaspy ingresando d.plaspy.com o 54.85.159.138 como destino de servidor.
4. Configure el puerto del servidor en 8888 según lo requiere Plaspy.
5. Elija UDP o TCP como transporte si el dispositivo requiere selección explícita.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo indica.
7. Valide que el PT32 reporte a Plaspy y aparezca en la plataforma con actualizaciones en vivo.

## Comandos de configuración de ejemplo

El PT32 admite configuración mediante SMS. A continuación se muestran los comandos SMS públicos que se usan comúnmente para preparar el dispositivo para Plaspy. Conserve los marcadores de posición al enviar comandos y reemplácelos con los valores de su operador.

- Reinicio de fábrica opcional (usar solo si necesita restaurar valores por defecto):
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0:
```text
GMT,E,0#
```

- Configurar el APN del operador. Reemplace los marcadores con los valores de su operador:
```text
APN,{{apn}}#
```
Si su operador requiere usuario y contraseña de APN incluya los marcadores:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Explicación de los marcadores:
- {{apn}} es el nombre del APN proporcionado por su operador móvil.
- {{apnu}} es el usuario del APN cuando se requiere.
- {{apnp}} es la contraseña del APN cuando se requiere.

- Configurar el servidor GPRS con el dominio de Plaspy y el puerto:
```text
SERVER,1,d.plaspy.com,8888#
```
- Alternativamente, configurar el servidor GPRS usando la IP de Plaspy y el puerto:
```text
SERVER,0,54.85.159.138,8888#
```
(Los ejemplos del fabricante muestran opciones tanto con dominio como con IP. Use el formato que su firmware espere.)

- Establecer el intervalo de actualización cada 60 segundos:
```text
TIMER,60#
```

- Consultar los parámetros actuales:
```text
PARAM#
```

Envíe cada SMS desde el número de teléfono administrador del dispositivo o siguiendo el procedimiento SMS del fabricante. La sintaxis exacta y los prefijos requeridos pueden variar según la versión de firmware; use estos como ejemplos públicos proporcionados por iStartek.

## Notas de configuración

- La configuración mostrada arriba usa comandos SMS tal como aparecen en la guía pública del fabricante. Puede existir una herramienta oficial o interfaz web para configuración masiva o gráfica.
- Elija UDP o TCP según las necesidades del despliegue; el dispositivo y Plaspy soportan ambos transportes y Plaspy detectará automáticamente el protocolo utilizado.
- Diferencias de firmware y variantes regionales pueden cambiar la sintaxis de los comandos o los parámetros soportados. Siempre revise las notas de la versión del firmware del dispositivo.
- Verifique APN, usuario y contraseña con su operador móvil antes de configurar el dispositivo.
- Use PARAM# o las respuestas de confirmación del dispositivo para validar los ajustes después de enviar los comandos.

## Por qué usar Plaspy con esta configuración

Usar el PT32 con Plaspy ofrece visibilidad centralizada y supervisión operativa para casos de uso de seguimiento de mascotas. Apuntar el PT32 a Plaspy permite a organizaciones y propietarios recibir actualizaciones de ubicación en tiempo real, alertas por movimiento o eventos de geocerca, y reproducción histórica de rutas para recuperación y revisión de incidentes.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y revise los detalles de dispositivos y notas de firmware más recientes en el sitio de iStartek https://istartek.com/. Los métodos de configuración del fabricante, el comportamiento del firmware y las especificaciones del dispositivo pueden cambiar con el tiempo, por lo que verifique las instrucciones actuales en el sitio oficial de iStartek.
