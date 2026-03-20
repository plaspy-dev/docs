---
slug: /v_sun/tlt_8b/configuration
id: tlt_8b-configuration
sidebar_label: Configuration
title: V-SUN - TLT-8B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el V-SUN TLT-8B y apuntarlo a Plaspy con pasos básicos por SMS
keywords:
  - Configuración V-SUN TLT-8B
  - Instalación V-SUN TLT-8B
  - TLT-8B Plaspy
  - Configuración rastreador GPS V-SUN
  - Configuración servidor TLT-8B
  - Configuración rastreador de vehículo
  - Configuración OBD II
  - Configuración GPRS rastreador
  - Configuración Plaspy rastreador
  - Instrucciones rastreador V-SUN
---

# V-SUN - TLT-8B Configuración

Esta página documenta el contexto público de configuración para usar el rastreador V-SUN TLT-8B con la plataforma Plaspy. Resume los pasos prácticos y los comandos SMS de uso público más comunes para preparar el TLT-8B para comunicarse con Plaspy, y señala los ajustes de servidor compartidos que Plaspy requiere. La guía utiliza la descripción del TLT-8B como base y recoge los patrones de comandos SMS proporcionados por el fabricante cuando están disponibles.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la revisión de firmware, la versión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando existan comandos SMS públicos se muestran más abajo; confirme cualquier diferencia específica del equipo con la documentación de V-SUN antes de aplicar cambios.

## Resumen de la configuración

Este proceso prepara un TLT-8B para enviar mensajes de ubicación y estado a Plaspy, de modo que el dispositivo sea visible y rastreable en la plataforma. Los pasos se enfocan en indicar al rastreador a dónde reportar, asegurar que GPRS esté habilitado y validar la comunicación desde el vehículo hacia Plaspy.

- Apuntar el rastreador al endpoint y puerto del servidor de Plaspy usados por todos los dispositivos
- Configurar o verificar el APN del equipo para que los datos GPRS funcionen con su SIM
- Habilitar los modos de reporte GPRS y GPS para que el rastreador envíe datos de posición
- Establecer intervalos de reporte adecuados para estados en movimiento y estacionarios
- Verificar que el rastreador aparezca y reporte correctamente en Plaspy tras la configuración

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Transporte soportado: se puede usar UDP o TCP según la selección del dispositivo  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el equipo se conecta

## Requisitos típicos antes de la configuración

- Un V-SUN TLT-8B alimentado y accesible instalado en el vehículo o conectado al puerto OBD II según corresponda
- Una tarjeta SIM activa con datos habilitados y la información APN correcta del operador móvil
- Capacidad para enviar comandos SMS al rastreador o acceso a la herramienta de configuración del fabricante si está disponible
- Conocimiento de la contraseña por defecto del equipo si es necesaria para los comandos (los ejemplos públicos usan 0000)
- Una breve ventana de mantenimiento para reiniciar o ciclar la alimentación del dispositivo después de aplicar la configuración
- Acceso a la documentación oficial del fabricante para cualquier detalle específico de firmware

## Cómo se conecta este rastreador con Plaspy

El TLT-8B utiliza su conexión GSM GPRS para enviar mensajes de posición y estado al endpoint compartido de Plaspy. Una vez configurado con el servidor y puerto correctos, el equipo transmitirá datos por el transporte elegido y Plaspy reconocerá automáticamente el protocolo del rastreador.

- El rastreador se configura para enviar datos GPRS a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888  
- El transporte puede establecerse en UDP o TCP según las capacidades del equipo y las condiciones de la red  
- Plaspy recibe los mensajes entrantes y los asigna en la plataforma mediante la detección automática de protocolo  
- Cuando el reporte está activo, el dispositivo aparece en la plataforma Plaspy para seguimiento en tiempo real, alertas de eventos y carga de historial  
- Los intervalos regulares de reporte controlan la frecuencia con la que se envían actualizaciones en movimiento y en reposo

## Flujo de trabajo habitual de configuración

1. Acceda al método de configuración oficial de V-SUN para el TLT-8B, por ejemplo comandos SMS o software del proveedor
2. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo
3. Configure el puerto del servidor en 8888 en la configuración del equipo
4. Elija UDP o TCP como transporte si el dispositivo requiere selección de transporte
5. Configure el APN y cualquier usuario o contraseña de APN necesarios para que la SIM pueda abrir una sesión GPRS
6. Aplique o guarde la configuración y envíe los comandos de activación necesarios para cambiar el equipo a modo GPRS
7. Reinicie o corte la alimentación del dispositivo si el firmware lo requiere
8. Valide que el equipo esté reportando a Plaspy comprobando el estado del dispositivo en la plataforma y confirmando los mensajes recibidos

## Comandos de configuración de ejemplo

Los siguientes comandos SMS son ejemplos públicos usados con el V-SUN TLT-8B. En los ejemplos el dispositivo usa la contraseña por defecto 0000. Mantenga los marcadores de posición y reemplácelos por los valores de su operador donde sea necesario.

- Comando opcional de reseteo de fábrica inicial (usar solo cuando sea necesario):
```
*RESET#0000##
```

- Configurar el APN del operador. Reemplace [apn] con el APN de su operador. Si su APN requiere usuario y contraseña incluya [apnu] y [apnp]:
```
#803#0000#[apn]##
```
o con usuario y contraseña:
```
#803#0000#[apn]#[apnu]#[apnp]##
```
(Mantenga los marcadores de posición exactamente como se muestran y reemplácelos con los valores de su operador.)

- Configurar el servidor GPRS hacia Plaspy usando la IP pública y el puerto. Esto apunta el rastreador a Plaspy en el puerto 8888:
```
#804#0000#54.85.159.138#8888##
```

- Establecer el intervalo de actualización para estado en movimiento (el ejemplo público usa el valor 120):
```
#805#0000#120#1##
```

- Establecer el intervalo de actualización para estado estático (el ejemplo público usa el valor 120):
```
#809#0000#120#1##
```

- Habilitar modo GPRS en el dispositivo (ejemplo público):
```
7100000
```

- Habilitar modo GPS en el dispositivo (ejemplo público):
```
2220000
```

Siga el orden de los comandos cuando ese orden sea importante. Los ejemplos anteriores se derivan de patrones de comandos de dispositivo compartidos públicamente; verifique la sintaxis exacta para su versión de firmware antes de enviar los comandos.

## Notas de configuración

- Las variaciones de firmware pueden cambiar la sintaxis de los comandos y los parámetros disponibles; confirme siempre con el fabricante la revisión de firmware de su equipo
- La configuración por SMS requiere que la SIM pueda recibir SMS y que usted conozca la contraseña del dispositivo; los ejemplos públicos usan 0000 como valor por defecto
- La elección entre TCP y UDP puede depender del comportamiento de la red y del dispositivo. Plaspy soporta ambos transportes y aceptará datos en el puerto 8888
- Las credenciales de APN son específicas del operador. Use exactamente el APN, usuario y contraseña proporcionados por su operador de SIM y reemplace los marcadores de posición en consecuencia
- Algunos cambios requieren reinicio del dispositivo o corte de alimentación para que el nuevo servidor y modos surtan efecto

## Por qué usar Plaspy con esta configuración

Usar el V-SUN TLT-8B con Plaspy ofrece una forma directa de centralizar la ubicación y el estado del vehículo en una única plataforma. Apuntar el rastreador al servidor y puerto compartidos de Plaspy hace que el dispositivo sea visible en la plataforma, habilitando monitoreo operativo, reporte de eventos y reproducción histórica para flotas o gestión de vehículos.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para métodos de configuración específicos de dispositivo, notas de firmware y orientación del fabricante más actual consulte el sitio de V-SUN en http://www.v-sun.cc/ ya que el comportamiento y los detalles de configuración pueden cambiar con el tiempo.
