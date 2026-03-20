---
slug: /eelink/gpt46/configuration
id: gpt46-configuration
sidebar_label: Configuration
title: EElink - GPT46 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GPT46 para conectar el rastreador EElink a Plaspy usando servidor compartido y comandos SMS
keywords:
- Configuración EElink GPT46
- Configuración GPT46
- Configuración GPT46 Plaspy
- Configuración servidor GPT46
- Configuración rastreador GPS EElink
- Configuración rastreador Plaspy
- Configuración software seguimiento GPT46
- Integración plataforma GPS GPT46
- Configuración rastreador de activos EElink
- Configuración LTE Cat M1 GPT46
---

# EElink - Configuración del GPT46

Esta página describe el contexto público de configuración para usar el rastreador EElink GPT46 con Plaspy. Se enfoca en los pasos prácticos y los parámetros de servidor necesarios para apuntar el equipo a Plaspy y permitir que el rastreador envíe ubicación y telemetría a la plataforma. Cuando están disponibles, se incluyen los comandos SMS públicos que se usan comúnmente para configurar el GPT46 para el reporte en la nube.

Plaspy utiliza configuraciones de servidor compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador en las conexiones entrantes. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor, por lo que los comandos y flujos de trabajo aquí deben considerarse un punto de partida práctico y siempre verificar el comportamiento del dispositivo con la documentación oficial de EElink o las notas de firmware.

## Resumen de la configuración

El objetivo al configurar un GPT46 para Plaspy es preparar el rastreador para comunicarse de forma confiable con el endpoint en la nube de Plaspy, validar la conectividad y permitir la visibilidad del activo dentro del tablero de Plaspy. El flujo público de configuración normalmente se centra en establecer parámetros APN, apuntar el dispositivo a los ajustes del servidor de Plaspy y confirmar los intervalos de reporte regulares.

- Configure el APN del dispositivo para que el rastreador pueda establecer conectividad de datos celular.
- Configure el servidor GPRS para apuntar a Plaspy usando el dominio o la IP proporcionados y el puerto común de Plaspy.
- Seleccione el tipo de transporte si el firmware del dispositivo lo requiere: UDP o TCP, ambos soportados por Plaspy en el puerto compartido.
- Defina un intervalo de reporte que cumpla con sus necesidades de monitoreo y objetivos de batería.
- Verifique la configuración comprobando los parámetros del equipo o observando los datos entrantes en Plaspy.

## Parámetros del servidor Plaspy

- Dominio del servidor d.plaspy.com para configuración basada en dominio
- IP del servidor 54.85.159.138 como alternativa al dominio
- Puerto 8888 que Plaspy utiliza para todos los dispositivos
- Transporte soportado UDP o TCP en el puerto 8888 según la configuración del rastreador
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Una unidad GPT46 con energía y carga de batería suficiente para los pasos de configuración y el reporte de prueba inicial
- Una tarjeta SIM activa con plan de datos y capacidad de SMS si piensa enviar comandos SMS para la configuración
- La información correcta del APN del operador lista para ingresar en el rastreador
- Acceso al lugar de instalación del dispositivo o la capacidad de enviar SMS al dispositivo si la configuración será remota
- Método de configuración provisto por el fabricante, como comandos SMS o la herramienta EElink, y las credenciales necesarias
- Una cuenta en Plaspy y la posibilidad de verificar las conexiones entrantes desde el dispositivo en Plaspy después de la configuración

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el GPT46 envía paquetes de posición y telemetría al endpoint compartido de Plaspy en el servidor y puerto indicados. Plaspy recibe esos paquetes, identifica automáticamente el protocolo del rastreador y mapea los datos del dispositivo en la plataforma para visualización y alertas.

- El rastreador envía datos GPRS al servidor de Plaspy en d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El transporte puede usar UDP o TCP según la selección del dispositivo y el soporte del firmware
- Plaspy detecta automáticamente el protocolo entrante del rastreador, por lo que no se requiere seleccionar un protocolo en el lado del servidor
- Actualizaciones periódicas basadas en temporizador mantienen el dispositivo visible en Plaspy para seguimiento en tiempo real y reproducción de historial
- Informes de eventos o de movimiento del rastreador aparecen en Plaspy para habilitar alertas y flujos operativos

## Flujo típico de configuración

1. Acceda al método oficial de configuración de EElink para el GPT46, por ejemplo mediante comandos SMS o la herramienta del proveedor suministrada por EElink.
2. Ingrese el servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según lo indicado.
3. Configure el puerto del servidor en 8888, que es el puerto común que Plaspy utiliza para todos los dispositivos soportados.
4. Si el rastreador requiere selección de transporte, elija UDP o TCP de acuerdo con las opciones del dispositivo y las condiciones de la red.
5. Agregue o verifique los parámetros APN del operador para que el equipo pueda establecer conectividad de datos GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el flujo de trabajo lo requieren.
7. Valide que el dispositivo reporte a Plaspy comprobando los parámetros del equipo o supervisando los datos entrantes en su cuenta de Plaspy.

## Comandos de configuración de ejemplo

El GPT46 puede configurarse enviando mensajes SMS con comandos específicos. Los comandos públicos a continuación se presentan en el orden que comúnmente se utiliza. El comando de restablecimiento de fábrica es opcional y se usa típicamente durante el aprovisionamiento inicial o si necesita borrar configuraciones previas.

- Restablecimiento de fábrica opcional
```text
FACTORY#
```

- Establecer zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
```text
APN,[apn],[apnu],[apnp]#
```
Nota: Mantenga los marcadores de posición [apn], [apnu] y [apnp] según sea necesario. Reemplace [apn] con la cadena APN de su operador. Si su operador requiere nombre de usuario o contraseña, incluya [apnu] y [apnp] respectivamente; de lo contrario, puede omitir esos campos si el dispositivo lo permite.

- Establecer el servidor GPRS por dominio usando los ajustes de Plaspy
```text
SERVER,1,d.plaspy.com,8888#
```

- O establecer el servidor GPRS por IP usando los ajustes de Plaspy
```text
SERVER,0,54.85.159.138,8888#
```

- Fijar el intervalo de actualización cada 60 segundos
```text
TIMER,60#
```

- Verificar parámetros actuales
```text
PARAM#
```

Use su herramienta de SMS o software de aprovisionamiento para enviar estos comandos al número telefónico del dispositivo. Confirme cada respuesta y luego verifique el reporte en Plaspy.

## Notas sobre la configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis exacta de los comandos o los parámetros disponibles; consulte la documentación de EElink cuando los comandos no se comporten como se espera.
- El GPT46 soporta configuración vía SMS como se muestra en los comandos públicos; también pueden existir herramientas alternativas del proveedor disponibles desde EElink.
- Elija UDP o TCP en función de la fiabilidad de la red y las restricciones del operador; Plaspy acepta ambos en el puerto compartido.
- Verifique siempre los campos APN con el operador de la SIM. Use los marcadores [apn], [apnu] y [apnp] cuando se requiera usuario o contraseña.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y realiza detección automática de protocolo en las conexiones entrantes.

## Por qué usar Plaspy con esta configuración

Configurar el GPT46 para que reporte a Plaspy ofrece a las organizaciones visibilidad centralizada de activos móviles y elementos de flota que requieren larga espera en standby y telemetría periódica. Con los pasos públicos de configuración y los parámetros de servidor indicados, el GPT46 puede entregar actualizaciones regulares de ubicación a Plaspy para monitoreo en tiempo real, reproducción de historial y alertas que soportan flujos operativos como detección de robo y supervisión de rutas.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los detalles más actuales sobre la configuración específica del dispositivo, notas de firmware y comandos, verifique la información en el sitio del fabricante https://www.eelink.com.cn/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
