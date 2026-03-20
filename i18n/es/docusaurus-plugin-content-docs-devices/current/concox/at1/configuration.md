---
slug: /concox/at1/configuration
id: at1-configuration
sidebar_label: Configuration
title: Concox - AT1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Concox AT1 y ajustes de servidor Plaspy para integración y reportes confiables
keywords:
  - Configuración Concox AT1
  - Configuración inicial Concox AT1
  - Configuración servidor Concox AT1
  - Configuración rastreador Plaspy
  - Configuración GPS AT1
  - Configuración rastreador de activos
  - Configuración seguimiento de flotas
  - Concox AT1 Plaspy
  - Integración rastreador GPS
  - Comandos SMS rastreador
---

# Concox - Configuración AT1

Esta página documenta el contexto público de configuración para usar el rastreador Concox AT1 con Plaspy. Se centra en los ajustes públicos prácticos y en el flujo de trabajo que preparan el dispositivo para enviar datos de ubicación y eventos a la plataforma telemática en la nube de Plaspy. Cuando aplica, se reproducen ejemplos de comandos SMS del fabricante para mayor claridad.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El AT1 soporta configuración vía SMS y reportes estándar por GPRS, por lo que esta guía combina los requisitos de la plataforma con la secuencia pública de comandos del dispositivo para ayudarle a integrar el AT1 en los flujos de trabajo de Plaspy.

## Resumen de configuración

El objetivo de configurar el AT1 para Plaspy es preparar el rastreador para conectarse al endpoint compartido de servidor de Plaspy, verificar la conectividad y asegurar que el dispositivo reporte regularmente para que aparezca en sus paneles de Plaspy. Los comandos SMS del AT1 permiten ajustar zona horaria, APN, servidor GPRS, intervalo de reporte y habilitar modo GPRS. Use estos ajustes y comandos públicos como base para la integración y confirme el funcionamiento en Plaspy después de aplicar la configuración.

- Configure el dispositivo para usar el endpoint de servidor de Plaspy de modo que la telemetría y la ubicación lleguen a la plataforma.
- Establezca el APN correcto y active GPRS para que el AT1 pueda transmitir por datos celulares.
- Elija intervalos de reporte que equilibren el seguimiento oportuno y la duración de la batería.
- Valide los comandos y parámetros mediante el comando de verificación del AT1 para confirmar los ajustes.
- Asegúrese de que el dispositivo esté alimentado, tenga una tarjeta SIM activa y sea alcanzable por SMS durante la configuración.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporta transporte UDP o TCP; el dispositivo puede configurarse con cualquiera de los dos
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos

## Requisitos típicos antes de la configuración

- Un equipo AT1 con batería cargada y tarjeta SIM funcionando
- Acceso a un teléfono con capacidad de enviar SMS o a la herramienta de configuración del fabricante para enviar comandos
- El APN del operador móvil correcto, y usuario y contraseña si el plan de datos lo requiere
- Una ubicación de prueba segura con cobertura celular para que el dispositivo se registre en la red
- Acceso a la documentación del fabricante o soporte del proveedor para comportamientos específicos del dispositivo
- Capacidad de monitorear la plataforma Plaspy para confirmar que el dispositivo aparece y reporta correctamente

## Cómo se conecta este rastreador a Plaspy

El AT1 envía ubicación, eventos y telemetría al endpoint y puerto compartidos del servidor Plaspy configurados en el dispositivo. Cuando está configurado con los ajustes de servidor de Plaspy y un APN válido, el rastreador utiliza datos celulares para enviar actualizaciones periódicas y mensajes por eventos, lo que permite la visibilidad en Plaspy para monitoreo en tiempo real y análisis histórico.

- El rastreador envía actualizaciones periódicas de GPS y LBS a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Notificaciones de eventos como manipulación, movimiento y alarmas son reenviadas a Plaspy para su procesamiento inmediato
- Cuando la cobertura es limitada, el AT1 almacena datos localmente y reenvía la telemetría almacenada a Plaspy al restablecerse la conectividad
- El transporte puede configurarse como UDP o TCP en el puerto 8888 según la opción del dispositivo; Plaspy detectará el protocolo automáticamente
- Una configuración exitosa hace que el dispositivo aparezca en los paneles de Plaspy y genere flujos de telemetría en vivo

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Concox para el AT1, normalmente mediante comandos SMS o herramientas del proveedor, siguiendo la documentación del fabricante.
2. Asegúrese de que el dispositivo tenga batería cargada y una SIM activa con el APN correcto para datos.
3. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Establezca el puerto en 8888 y elija el modo de transporte UDP o TCP si el dispositivo exige selección de transporte.
5. Configure la zona horaria, los intervalos de reporte y habilite el modo GPRS según el perfil de despliegue.
6. Aplique o guarde la configuración y reinicie el dispositivo si la guía del dispositivo o del proveedor lo requiere.
7. Valide que el rastreador reporte a Plaspy verificando la actividad en la plataforma y usando el comando de verificación del dispositivo.

## Ejemplos de comandos de configuración

El AT1 soporta configuración por SMS. Los siguientes comandos se presentan en el orden sugerido por el fabricante y deben enviarse como mensajes SMS al dispositivo. Conserve los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} cuando su APN requiera valores de usuario o contraseña. Marque el reinicio de fábrica como opcional y úselo solo al preparar un dispositivo para su configuración inicial o al solucionar problemas.

- Reinicio de fábrica inicial opcional
```text
FACTORY#
```

- Establecer la zona horaria a UTC+0 (ejemplo)
```text
GMT,E,0#
```

- Establecer el APN del operador móvil (reemplace los marcadores de posición con los valores de su operador)
```text
APN,{{apn}}{{,{{apnu}},{{apnp}}}}#
```
Explicación: {{apn}} es el APN del operador. Si su APN requiere usuario y contraseña, incluya {{apnu}} y {{apnp}} en el comando en el orden mostrado.

- Configurar el servidor GPRS a Plaspy por dominio (UDP o TCP en el puerto 8888)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- O configurar el servidor GPRS a Plaspy por dirección IP
```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización a 60 segundos (dos formas válidas)
```text
TIMER,60#
```
o
```text
TIMER,60,60#
```

- Habilitar modo GPRS
```text
GPRSON,1#
```

- Consultar los parámetros GPRS actuales
```text
GPRSSET#
```

Nota: Envíe los comandos como mensajes SMS de texto plano al número del dispositivo. La sintaxis exacta y las variantes soportadas pueden variar según la versión de firmware; confirme las respuestas del dispositivo y consulte la documentación de Concox si un comando es rechazado.

## Notas sobre la configuración

- El dispositivo acepta configuración por SMS, pero también puede disponer de herramientas del proveedor o software para PC; utilice el método oficial recomendado por Concox para su firmware.
- Las revisiones de firmware pueden cambiar la sintaxis y el comportamiento de los comandos; si un comando falla, verifique instrucciones específicas de firmware con Concox.
- Elija UDP o TCP según su preferencia de despliegue y las capacidades del dispositivo; Plaspy soporta ambos transportes y detecta el protocolo automáticamente.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles; configure este puerto con precisión al establecer el endpoint del servidor.
- Mantenga los marcadores de APN intactos durante la planificación y reemplácelos por los valores del operador al enviar el comando APN.

## Por qué usar Plaspy con esta configuración

Usar el Concox AT1 con Plaspy ofrece una forma sencilla de integrar rastreo robusto de activos y monitoreo de eventos en un flujo de trabajo telemático en la nube. La larga autonomía y las capacidades de almacenamiento del AT1 combinadas con el endpoint unificado de servidor de Plaspy hacen práctico desplegar activos reutilizables y monitorearlos de forma centralizada sin configuraciones complejas por dispositivo.

Para obtener más información sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para instrucciones específicas del dispositivo, notas de firmware y detalles del fabricante, verifique la información actual en el sitio de Concox https://www.iconcox.com/ ya que las especificaciones y métodos de configuración pueden cambiar con el tiempo.
