---
slug: /concox/vg102/configuration
id: vg102-configuration
sidebar_label: Configuration
title: Concox - VG102 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Concox VG102 con Plaspy mediante servidor compartido y comandos SMS
keywords:
  - Configuración Concox VG102
  - Configuración VG102
  - Configuración servidor Concox VG102
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS para motocicleta
  - Comandos SMS VG102
  - Ajustes servidor GPRS
  - Integración rastreador GPS
  - Configuración seguimiento vehicular
  - Concox Plaspy
---

# Concox - Configuración del VG102

Esta página documenta el contexto público de configuración para usar el rastreador Concox VG102 con Plaspy. Se centra en los ajustes prácticos del servidor y en los comandos SMS de uso común proporcionados por el fabricante, que preparan el dispositivo para enviar datos de ubicación y eventos a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando están disponibles, aquí se incluyen los comandos SMS del fabricante y recomendaciones prácticas para ayudarle a registrar y verificar el VG102 en Plaspy.

## Resumen de configuración

El proceso de configuración prepara el VG102 para comunicarse de forma fiable con Plaspy y garantizar que el dispositivo envíe ubicación y alertas a la plataforma central. La configuración típica usa comandos SMS o ajustes GPRS para apuntar el rastreador a Plaspy y definir los intervalos de reporte.

- Configure el dispositivo para que use el endpoint de servidor de Plaspy y así la telemetría llegue a la plataforma.
- Establezca el APN del operador y habilite GPRS para que el rastreador pueda usar datos móviles.
- Elija UDP o TCP como transporte y configure el puerto compartido de Plaspy que usan todos los dispositivos.
- Defina intervalos de reporte, como actualizaciones periódicas de posición, conforme a sus requisitos de monitoreo.
- Use comandos de verificación para confirmar que el rastreador apunta al servidor de Plaspy y reporta correctamente.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Una tarjeta SIM activa con datos móviles habilitados y conocer el APN del operador
- Acceso al método de configuración del VG102 que soporte su unidad, como comandos SMS o la herramienta del fabricante
- Dispositivo alimentado e instalado o alimentado temporalmente para la configuración
- Conocimiento del APN del operador y, opcionalmente, del usuario y contraseña del APN si el operador los requiere
- Capacidad para enviar y recibir SMS con el dispositivo para la configuración y verificación por SMS
- Familiaridad con el acceso a su cuenta de Plaspy para validar la visibilidad del dispositivo después de la configuración

## Cómo se conecta este rastreador a Plaspy

Al configurarlo, el VG102 envía posición GNSS, alertas de eventos y estado del dispositivo al endpoint y puerto del servidor de Plaspy. Plaspy normaliza los mensajes entrantes y los presenta en paneles, vistas de historial y reglas de alerta.

- El rastreador reporta al endpoint compartido d.plaspy.com o a la IP 54.85.159.138
- Los datos se envían al puerto 8888, que Plaspy utiliza para todos los dispositivos compatibles
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las condiciones de la red
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se requiere poca selección manual por dispositivo
- Los eventos y la telemetría reportados aparecen en Plaspy para visualización, alertas y acciones de control remoto

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Concox para su VG102, como los comandos SMS documentados por Concox o la herramienta de configuración del proveedor.
2. Configure el APN del dispositivo con los valores del operador para que se pueda usar GPRS.
3. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o 54.85.159.138.
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo solicita selección de transporte.
5. Aplique o guarde la configuración y habilite GPRS o el modo de datos según sea necesario.
6. Reinicie el rastreador si las instrucciones del fabricante indican que es necesario.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del equipo en Plaspy y usando el comando de verificación o la comprobación de estado GPRS.

## Ejemplos de comandos de configuración

Para configurar el VG102 por SMS, envíe los siguientes comandos en el orden indicado. Estos son los comandos públicos provistos por el fabricante. Preserve los marcadores de posición como [apn], [apnu] y [apnp] y reemplácelos por los valores del APN del operador al enviar.

- Reinicio de fábrica opcional cuando sea necesario
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
```text
APN,[apn]#
```
Si su APN requiere usuario y contraseña, inclúyalos como marcadores
```text
APN,[apn],[apnu],[apnp]#
```

- Configurar el servidor GPRS para usar el dominio de Plaspy y el puerto (se puede usar UDP o TCP en el puerto 8888)
```text
SERVER,1,d.plaspy.com,8888,0#
```
O configurar el servidor GPRS usando la IP del servidor de Plaspy
```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización a cada 60 segundos
```text
TIMER,60#
```
Formato alternativo de intervalo
```text
TIMER,60,60#
```

- Habilitar modo GPRS
```text
GPRSON,1#
```

- Verificar parámetros GPRS actuales en el dispositivo
```text
GPRSSET#
```

Notas sobre los marcadores de posición
- [apn] es el dominio APN del operador, por ejemplo internet u otro APN específico del operador.
- [apnu] y [apnp] son usuario y contraseña opcionales del APN cuando el operador los requiere.

## Notas de configuración

- Los comandos por SMS indicados son los públicos para la configuración del VG102; algunos instaladores prefieren la herramienta del fabricante o un configurador PC cuando está disponible.
- Las revisiones de firmware y de hardware pueden cambiar los comandos disponibles o la sintaxis exacta; consulte la documentación oficial de Concox si un comando no funciona como espera.
- Elija UDP o TCP según la fiabilidad de la red y las recomendaciones del operador. Plaspy acepta ambos transportes en el puerto compartido 8888 y detecta el protocolo automáticamente.
- Todos los dispositivos en Plaspy usan el mismo puerto; no necesita asignar un puerto específico por dispositivo para comunicarse con Plaspy.
- Use el comando de verificación GPRSSET# tras la configuración para confirmar que los valores de APN, servidor y temporizador se aplicaron correctamente.

## Por qué usar Plaspy con esta configuración

Usar el Concox VG102 con Plaspy ofrece seguimiento orientado a motocicletas y reporte de eventos en una plataforma centralizada de gestión de flotas. El VG102 alimenta Plaspy con posición GNSS y datos de alerta para que los operadores puedan monitorear ubicaciones, recibir notificaciones de manipulación o volcamiento y aplicar flujos de trabajo basados en reglas como inmovilización remota cuando sea necesario.

Para saber más sobre Plaspy visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y orientación de instalación, verifique la documentación oficial de Concox en https://www.iconcox.com/ ya que las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.
