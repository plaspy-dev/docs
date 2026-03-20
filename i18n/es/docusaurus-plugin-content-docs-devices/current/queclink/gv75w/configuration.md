---
slug: /queclink/gv75w/configuration
id: gv75w-configuration
sidebar_label: Configuration
title: QuecLink - GV75W Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar QuecLink GV75W y direccionarlo al servidor Plaspy usando comandos SMS y ajustes de telemetría
keywords:
  - configuración QuecLink GV75W
  - configuración GV75W Plaspy
  - configuración servidor QuecLink GV75W
  - configuración software rastreo GV75W
  - instalación rastreador GPS QuecLink
  - comandos SMS configuración GV75W
  - integración rastreador Plaspy
  - configuración seguimiento flotas GV75W
  - seguimiento activos QuecLink Plaspy
  - configuración telemetría GV75W
---

# QuecLink - GV75W: Configuración

Esta página documenta el contexto público y práctico de configuración para usar el QuecLink GV75W con Plaspy. Se enfoca en los ajustes y ejemplos de comandos que normalmente se usan para apuntar un dispositivo GV75W al endpoint de Plaspy para reportes de posición y telemetría en vivo. Use esta guía junto con la documentación de hardware del GV75W y sus procedimientos de instalación.

Plaspy emplea ajustes de servidor compartidos para todos los rastreadores soportados y detecta automáticamente el protocolo del dispositivo. Las acciones del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que confirme detalles concretos en los recursos de QuecLink y las notas de versión del firmware antes de aplicar comandos en producción.

## Resumen de la configuración

Preparar un GV75W para la integración con Plaspy normalmente implica configurar el dispositivo para que se autentique en redes móviles, envíe reportes GPRS al endpoint de Plaspy y genere eventos que aparezcan en la plataforma. Los comandos de ejemplo a continuación usan configuración por SMS, un método común para ajustes en campo.

- Configure el APN y la conectividad celular para que se puedan transmitir datos GPRS.
- Apunte la dirección y puerto de reporte del dispositivo al endpoint de Plaspy para entrega de telemetría.
- Establezca intervalos de reporte y entradas de eventos para que Plaspy reciba actualizaciones oportunas de posición y alarmas.
- Verifique la visibilidad del equipo en Plaspy y valide los disparadores de eventos como SOS o entradas de ignición.
- Mantenga registradas las credenciales del dispositivo y el estado del firmware para mantenimiento de campo y seguridad.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Acceso al equipo GV75W y la capacidad de enviar mensajes SMS de configuración o usar la herramienta de configuración aprobada por QuecLink.
- Una tarjeta SIM activa instalada en el rastreador con datos y SMS habilitados y crédito suficiente o un plan de datos.
- Fuente de energía y una batería de respaldo cargada o conectada para evitar pérdida de energía durante la configuración.
- Conocimiento de la contraseña del dispositivo para comandos SMS; los ejemplos usan la contraseña por defecto queclink salvo que se haya cambiado.
- Acceso a los ajustes del servidor Plaspy d.plaspy.com o 54.85.159.138 y confirmación de que el puerto 8888 es accesible desde la red del operador móvil.
- Confirmación de la versión de firmware y cualquier instrucción específica del dispositivo proporcionada por QuecLink para su revisión de hardware.

## Cómo se conecta este rastreador a Plaspy

El GV75W se configura para enviar posiciones GNSS y reportes de eventos al endpoint y puerto del servidor Plaspy. Plaspy ingiere reportes programados de posición, alarmas y cambios de estado de entradas para que los dispositivos sean visibles en mapas en vivo, en el historial y en las reglas de alertas.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com y/o 54.85.159.138 en el puerto 8888.
- El transporte puede establecerse en UDP o TCP según la preferencia del operador y del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Los intervalos de reporte programados y los mensajes impulsados por eventos (por ejemplo SOS o alarmas de entrada) se envían inmediatamente a Plaspy para alertas e historial.
- Plaspy muestra la telemetría del dispositivo, su estado y las notificaciones de eventos una vez que el rastreador se conecta y transmite correctamente al endpoint especificado.

## Flujo de trabajo común de configuración

1. Obtenga el método oficial de configuración de QuecLink o las herramientas, y confirme que el dispositivo soporta SMS o la interfaz de configuración elegida.
2. Prepare el dispositivo con una SIM activa y asegúrese de la conectividad de red en el lugar de instalación.
3. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 en la configuración de servidor del dispositivo.
4. Establezca el puerto en 8888 y elija UDP o TCP si el equipo solicita selección de transporte.
5. Aplique o guarde la configuración y envíe los mensajes SMS de configuración requeridos desde un teléfono autorizado o un gateway SMS.
6. Reinicie el dispositivo si el cambio lo requiere o si el fabricante lo recomienda.
7. Valide que el equipo reporte a Plaspy confirmando que la unidad aparece en línea en la plataforma y que se reciben actualizaciones de posición y eventos de prueba.

## Comandos de configuración de ejemplo

El GV75W admite configuración basada en SMS. Los comandos de ejemplo a continuación son públicos para configuración por SMS. Estos comandos usan la contraseña de dispositivo queclink, que es la contraseña por defecto en el ejemplo. Envíe cada comando como un SMS al número del dispositivo. Preserve los marcadores de posición donde se muestran.

- Restaurar ajustes de fábrica (opcional durante la configuración inicial)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Establecer zona horaria a UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Configurar el APN del operador
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
Explicación de marcadores APN
- {{apn}} es el nombre del APN del operador móvil.
- {{apnu}} es el nombre de usuario del APN si se requiere; si no, dejar en blanco.
- {{apnp}} es la contraseña del APN si se requiere; si no, dejar en blanco.

- Configurar el servidor GPRS a Plaspy
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Este comando incluye tanto el dominio de Plaspy d.plaspy.com como la IP del servidor 54.85.159.138 y especifica el puerto 8888. Plaspy soporta UDP o TCP en este puerto y detecta automáticamente el protocolo del rastreador.

- Establecer intervalo de reporte a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Habilitar notificación de botón SOS en la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notas sobre los comandos
- Los comandos están mostrados en el orden recomendado para una configuración básica. El comando de restauración de fábrica es opcional y debe usarse solo si desea borrar configuraciones existentes.
- Mantenga segura la contraseña del dispositivo. El ejemplo usa la contraseña por defecto queclink donde se indica; si su equipo tiene otra contraseña, utilícela.
- Después de aplicar los comandos, reinicie el rastreador si es necesario y verifique que el dispositivo se conecte a Plaspy.

## Observaciones de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos o los parámetros requeridos; siempre consulte la documentación de QuecLink correspondiente a la versión de firmware de su dispositivo.
- El GV75W admite configuración por SMS como se muestra en los ejemplos públicos, pero las herramientas de configuración de QuecLink y las utilidades de PC pueden ofrecer flujos de trabajo alternativos.
- Elegir UDP o TCP puede depender de la fiabilidad de la red y del comportamiento del operador; pruebe ambos si observa problemas de conectividad. Plaspy acepta ambos protocolos en el puerto 8888 y detecta automáticamente el protocolo del rastreador.
- No deje las contraseñas por defecto en despliegues de producción sin un plan para la gestión segura de credenciales de los dispositivos.
- Si configura tanto dominio como IP para el servidor Plaspy en el dispositivo, este puede intentar resolución DNS primero y recurrir a la IP según el comportamiento del firmware.

## Por qué usar Plaspy con esta configuración

Usar el GV75W con Plaspy ofrece una solución práctica para organizaciones que requieren rastreo exterior robusto, protección contra robos y telemetría de flota. El comportamiento de bajo consumo del GV75W y su carcasa impermeable lo hacen apropiado para motocicletas, embarcaciones y equipos rústicos, mientras que Plaspy proporciona el endpoint en la nube y los servicios de plataforma para mapas en vivo, alertas, historial y análisis.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para la configuración más reciente y específica por dispositivo, notas de firmware y comandos consulte la documentación oficial de QuecLink en https://www.queclink.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
