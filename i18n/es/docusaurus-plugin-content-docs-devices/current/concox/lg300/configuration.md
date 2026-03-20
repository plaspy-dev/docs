---
slug: /concox/lg300/configuration
id: lg300-configuration
sidebar_label: Configuration
title: Concox - LG300 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar Concox LG300 para usar con Plaspy, con comandos SMS y ajustes de servidor para seguimiento confiable
keywords:
  - Configuración Concox LG300
  - Configuración LG300
  - Configuración LG300 Plaspy
  - Configuración de servidor LG300
  - Configuración rastreador GPS Concox
  - Configuración rastreador Plaspy
  - Comandos SMS LG300
  - Configuración GPRS LG300
  - Rastreo de vehículo LG300
  - Gestión de flotas LG300
---

# Concox - Configuración LG300

Esta página reúne la información pública necesaria para usar el rastreador Concox LG300 con Plaspy. Aquí encontrará los ajustes de servidor prácticos, los comandos SMS y los pasos de trabajo que usted puede emplear para preparar un dispositivo LG300 y que reporte ubicación y telemetría de eventos a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LG300 soporta reporte en la nube y configuración por SMS; en esta página se incluyen los comandos SMS públicos que se usan con frecuencia para establecer APN, servidor, temporizador y modo GPRS.

## Resumen de configuración

Configurar el LG300 para Plaspy consiste principalmente en apuntar el dispositivo a los puntos de ingestión de Plaspy, habilitar el reporte por GPRS o SMS y validar que la telemetría llega a la plataforma. Los comandos públicos que aparecen a continuación son aplicables a los flujos de configuración por SMS que se usan comúnmente en campo.

- Configurar el APN del dispositivo para permitir sesiones de datos GPRS y reporte en la nube.
- Ajustar los parámetros del servidor para apuntar a Plaspy usando el dominio o la IP compartida y el puerto estándar.
- Habilitar el reporte por GPRS y definir un intervalo de envío adecuado para balancear precisión de ubicación y duración de batería.
- Verificar la configuración con una comprobación de estado en el dispositivo y confirmar que la telemetría llega a Plaspy.
- Usar comandos SMS para configuración remota cuando no haya acceso físico o no se disponga de la herramienta del fabricante.

## Ajustes de servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automáticamente detecta el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un LG300 con batería cargada o conectado a una fuente de alimentación para realizar las operaciones de configuración
- Una tarjeta SIM válida con datos GPRS y capacidad de SMS, y conocer el APN del operador
- Acceso para enviar SMS desde un teléfono o herramienta de gestión para enviar los comandos de configuración
- Acceso a las instrucciones oficiales de Concox o a la herramienta de instalación del proveedor como referencia
- Permiso para reiniciar o cortar la alimentación del dispositivo si es necesario aplicar los cambios

## Cómo se conecta este rastreador a Plaspy

El LG300 transmite posiciones GNSS y telemetría de eventos por GSM a Plaspy usando los puntos de ingestión de la plataforma, o puede ser gestionado y consultado por SMS. Al configurar los ajustes de servidor de Plaspy, el dispositivo reportará al endpoint y puerto compartidos para que Plaspy presente datos de ubicación y eventos en tiempo real.

- Informes periódicos de ubicación enviados a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Reportes de eventos como manipulación, movimiento, activación de audio y batería baja dirigidos a Plaspy
- Sesiones de datos GPRS establecidas tras habilitar APN y modo GPRS para entregar telemetría en la nube
- SMS usados como canal de respaldo para configuración y resolución de problemas
- Plaspy recibe los datos en el puerto compartido y detecta automáticamente el protocolo del dispositivo para su ingestión

## Flujo común de configuración

1. Consulte la documentación oficial de Concox o el método de configuración recomendado por el proveedor para el LG300.
2. Asegúrese de que la SIM esté activa, tenga GPRS habilitado y que conozca las credenciales APN del operador.
3. Usando comandos SMS o la herramienta del fabricante, ingrese la dirección del servidor de Plaspy usando d.plaspy.com o 54.85.159.138.
4. Configure el puerto a 8888 y seleccione UDP o TCP si el dispositivo requiere elegir el transporte.
5. Ajuste el intervalo de reporte o el temporizador al ritmo deseado para equilibrar detalle de telemetría y duración de batería.
6. Aplique o guarde la configuración y reinicie el dispositivo si éste requiere un reboot para que los cambios surtan efecto.
7. Valide que el rastreador reporta a Plaspy revisando el estado del dispositivo en la plataforma y confirmando la llegada de telemetría.

## Comandos de configuración de ejemplo

El LG300 acepta comandos de configuración vía SMS. Los siguientes comandos públicos se presentan en el orden que se usa comúnmente para una configuración inicial. El orden tiene importancia para obtener resultados previsibles. El comando de restablecimiento es opcional y sólo debe usarse si necesita devolver el dispositivo a valores de fábrica.

- Restablecimiento de fábrica opcional como paso inicial
```
FACTORY#
```

- Establecer la zona horaria a UTC 0
```
GMT,E,0#
```

- Configurar el APN del operador
```
APN,[apn]#
```
Si su operador requiere usuario y contraseña incluya los campos opcionales como se muestra
```
APN,[apn],[apnu],[apnp]#
```
Nota: [apn] es la cadena APN del operador. [apnu] y [apnp] son los marcadores opcionales para usuario y contraseña del APN.

- Configurar el servidor GPRS usando el dominio de Plaspy (seleccione esta variante para usar el dominio)
```
SERVER,1,d.plaspy.com,8888,0#
```

- Alternativamente configurar el servidor GPRS usando la IP de Plaspy (seleccione esta variante para usar la IP)
```
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización a cada 60 segundos. Se muestran dos formatos válidos
```
TIMER,60#
```
o
```
TIMER,60,60#
```

- Habilitar el modo GPRS
```
GPRSON,1#
```

- Verificar parámetros GPRS y de servidor
```
GPRSSET#
```

Siga el orden de comandos anterior al realizar una configuración inicial. Use el restablecimiento de fábrica sólo cuando parta de ajustes desconocidos o cuando sea estrictamente necesario.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o los parámetros soportados. Verifique siempre los comandos contra la versión de firmware del dispositivo en campo.
- El LG300 soporta configuración por SMS, lo que resulta útil para activos remotos, pero la entrega de SMS y el comportamiento del operador pueden variar.
- Elija UDP o TCP según las necesidades de su despliegue y las opciones que presente la interfaz del dispositivo o la herramienta de configuración. Plaspy acepta ambos y detectará automáticamente el protocolo del rastreador.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles, por lo que el valor del puerto es consistente entre modelos.
- Confirme las credenciales APN con el operador móvil si las sesiones GPRS fallan y pruebe con el comando de verificación GPRSSET#.

## Por qué usar Plaspy con esta configuración

Usar el Concox LG300 con Plaspy ofrece una forma directa de recopilar telemetría robusta desde despliegues en campo. Al apuntar el dispositivo a Plaspy con los ajustes de servidor compartidos y habilitar el reporte por GPRS, Plaspy puede ingerir ubicación, alertas de manipulación, estado de batería y otros eventos en paneles consolidados para monitoreo e informes.

Para saber más sobre Plaspy visite https://www.plaspy.com y para los detalles más recientes específicos del dispositivo y notas de firmware consulte el sitio del fabricante https://www.iconcox.com/. Las especificaciones del fabricante, métodos de configuración y comportamiento del firmware pueden cambiar con el tiempo, por lo que verifique las instrucciones actuales con Concox antes de un despliegue a gran escala.
