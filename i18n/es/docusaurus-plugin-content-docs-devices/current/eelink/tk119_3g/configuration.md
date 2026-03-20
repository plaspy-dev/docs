---
slug: /eelink/tk119_3g/configuration
id: tk119_3g-configuration
sidebar_label: Configuration
title: EElink - TK119‑3G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del EElink TK119‑3G para Plaspy, con comandos SMS y ajustes de servidor
keywords:
  - configuración EElink TK119‑3G
  - configuración EElink TK119‑3G para Plaspy
  - configuración de servidor TK119‑3G
  - comandos SMS TK119‑3G
  - configuración APN TK119‑3G
  - rastreador GPS compatible con Plaspy
  - configuración de software de rastreo TK119‑3G
  - configuración de plataforma GPS TK119‑3G
  - configuración de rastreadores de flota Plaspy
  - ajustes de servidor para rastreadores de vehículos
---

# EElink - Configuración TK119‑3G

Esta página describe el contexto público de configuración para usar el rastreador EElink TK119‑3G con la plataforma Plaspy. Se concentra en los ajustes del servidor de Plaspy que debe introducir en el dispositivo e incluye los comandos SMS publicados para este modelo, de modo que usted pueda preparar el rastreador para reportar a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas que provea el proveedor. El TK119‑3G soporta configuración por SMS y reporte por GPRS, por lo que esta guía resalta el endpoint de Plaspy, ejemplos de comandos SMS y comprobaciones prácticas que debe realizar antes de verificar la visibilidad del dispositivo en Plaspy.

## Visión general de la configuración

El objetivo de la configuración es preparar el TK119‑3G para comunicarse de forma fiable con Plaspy usando el servidor y puerto compartidos de la plataforma, validar la conectividad y habilitar la visibilidad en tiempo real y el envío de eventos dentro de Plaspy. Para el TK119‑3G esto normalmente implica actualizar el APN y los parámetros del servidor y confirmar los intervalos de reporte.

- Configure el APN del dispositivo para que pueda usar datos móviles y alcanzar el servidor de Plaspy.
- Apunte el TK119‑3G a Plaspy estableciendo el dominio del servidor o la IP del servidor y el puerto compartido.
- Defina un temporizador de reporte apropiado para que las posiciones y eventos lleguen con la frecuencia necesaria.
- Utilice los comandos SMS publicados para la configuración inicial o la herramienta del fabricante si está disponible.
- Verifique que el dispositivo sea visible en Plaspy después de la configuración y que eventos como encendido e incendios/alarma se reporten correctamente.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP — configure el dispositivo en UDP o TCP si requiere selección de transporte
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al servidor y puerto compartidos

Todos los dispositivos en Plaspy usan el mismo puerto, por lo que siempre deberá configurar el puerto 8888 al apuntar un TK119‑3G a Plaspy.

## Requisitos típicos antes de la instalación

- El dispositivo debe estar encendido y accesible para su configuración, o debe contar con el instalador en sitio para enviar los SMS
- Una SIM activa con datos móviles y capacidad de SMS instalada en el rastreador y los datos del APN disponibles
- Un teléfono o herramienta de configuración capaz de enviar comandos SMS al TK119‑3G si va a usar la configuración por SMS
- Acceso a las instrucciones oficiales de configuración de EElink o notas de firmware para confirmar el comportamiento de comandos específicos del modelo
- Una cuenta de Plaspy o acceso a la información de onboarding de Plaspy para confirmar que el dispositivo aparece y reporta correctamente
- Lista básica de verificación para la instalación, incluyendo montaje seguro y conexiones de alimentación para que el dispositivo pueda reportar de forma fiable

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el TK119‑3G envía datos de ubicación y eventos a través de la red celular al endpoint y puerto del servidor de Plaspy, donde la plataforma ingiere los datos y los asocia a su cuenta. La plataforma de Plaspy procesa posición, encendido, alarmas y la telemetría configurada para monitoreo en tiempo real e informes históricos.

- El rastreador reporta al endpoint compartido de Plaspy en d.plaspy.com o directamente a la IP de Plaspy
- Los datos se envían por el puerto 8888, que es el mismo para todos los dispositivos soportados por Plaspy
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al servidor
- El dispositivo transmite actualizaciones periódicas de ubicación según el valor configurado en TIMER
- Mensajes de eventos y alarmas como encendido, exceso de velocidad y pérdida de alimentación se reenvían a Plaspy para notificaciones y registros

## Flujo típico de configuración

1. Acceda al método oficial de configuración de EElink para su unidad, normalmente comandos por SMS o la herramienta de configuración suministrada por el proveedor.
2. Configure el APN del operador para que el rastreador pueda establecer GPRS: use el comando APN con los valores del operador.
3. Introduzca la dirección del servidor de Plaspy especificando el dominio d.plaspy.com o la IP de Plaspy 54.85.159.138.
4. Configure el puerto en 8888 y elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Aplique o guarde la configuración en el dispositivo y realice cualquier reinicio o ciclo de alimentación recomendado.
6. Valide que el rastreador reporte a Plaspy y aparezca en su cuenta de Plaspy o en la lista de onboarding, y que se reciban las actualizaciones de ubicación y eventos.
7. Si es necesario, ajuste el TIMER o el intervalo de reporte y vuelva a comprobar la fiabilidad del envío de eventos.

## Comandos de configuración de ejemplo

El TK119‑3G puede configurarse enviando mensajes SMS al dispositivo. Use los comandos abajo en el orden indicado cuando el orden sea importante. Considere el comando de restablecimiento de fábrica como opcional solo para la configuración inicial.

- Restablecimiento de fábrica opcional
```text
FACTORY#
```

- Ajustar la zona horaria a UTC 0
```text
GMT,E,0#
```

- Establecer el APN del operador
```text
APN,[apn],[apnu],[apnp]#
```
Nota: [apn] es el nombre del APN requerido por su operador móvil. [apnu] y [apnp] son los campos opcionales de usuario y contraseña del APN que debe proporcionar solo si su operador los requiere.

- Establecer el servidor GPRS por dominio (use esto para apuntar el dispositivo a Plaspy por dominio)
```text
SERVER,1,d.plaspy.com,8888#
```

- O establecer el servidor GPRS por IP (método alternativo)
```text
SERVER,0,54.85.159.138,8888#
```

- Configurar el intervalo de actualización a cada 60 segundos
```text
TIMER,60#
```

- Verificar los parámetros actuales en el dispositivo
```text
PARAM#
```

Envíe cada comando como un SMS desde un número autorizado según requiera el dispositivo. Después de enviar los comandos de servidor y timer, confirme que el dispositivo reporta a Plaspy.

## Notas de configuración

- El comando SERVER acepta la forma por dominio SERVER,1,d.plaspy.com,8888# o la forma por IP SERVER,0,54.85.159.138,8888# según su preferencia o necesidades de red.
- Si su dispositivo o firmware solicita un tipo de transporte, elija UDP o TCP según corresponda; Plaspy acepta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- La configuración por SMS es un método habitual para dispositivos TK119‑3G, pero las herramientas del fabricante o utilidades USB de configuración también pueden estar disponibles según el firmware y la distribución del proveedor.
- Los campos del APN pueden requerir usuario y contraseña para algunos operadores; complete [apnu] y [apnp] solo cuando sea necesario.
- Las versiones de firmware y las variantes regionales de hardware pueden cambiar la sintaxis de los comandos o los parámetros disponibles; verifique los comandos en el dispositivo o con la documentación oficial de EElink antes de un despliegue masivo.

## Por qué usar Plaspy con esta configuración

Usar el TK119‑3G con Plaspy ofrece un reporte sencillo de posición, encendido y eventos de alarma dentro de una única plataforma de gestión de flotas. Los ajustes de servidor compartidos de Plaspy simplifican el despliegue en múltiples dispositivos porque todos los dispositivos Plaspy usan el mismo puerto y la plataforma gestiona la detección de protocolo, permitiendo que los equipos se enfoquen en la instalación, la configuración del APN y la validación en lugar del mapeo de protocolos.

Para obtener más información sobre Plaspy y cómo ingiere la telemetría de los dispositivos visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, notas de firmware y sintaxis de comandos, verifique la información en el sitio del fabricante https://www.eelink.com.cn/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.
