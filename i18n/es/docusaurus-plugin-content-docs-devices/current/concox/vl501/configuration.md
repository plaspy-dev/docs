---
slug: /concox/vl501/configuration
id: vl501-configuration
sidebar_label: Configuration
title: Concox - VL501 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración y comandos SMS para conectar Concox VL501 a Plaspy con ajustes de servidor compartido
keywords:
  - Configuración Concox VL501
  - Configuración VL501
  - Integración VL501 Plaspy
  - Configuración rastreador VL501 GPS
  - Configuración servidor Concox
  - Configuración software VL501
  - Configuración plataforma VL501 GPS
  - Configuración dispositivo Plaspy
  - Instalación Concox VL501
  - Rastreo de flotas VL501
---

# Concox - Configuración VL501

Esta página describe el contexto público de configuración para usar el rastreador Concox VL501 con Plaspy. Explica los ajustes de servidor compartido que Plaspy requiere y muestra los comandos SMS públicos y el flujo de trabajo que se usan comúnmente para preparar un VL501 para que reporte a la plataforma Plaspy.

Plaspy utiliza un endpoint y puerto de servidor comunes para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando se conecta. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas provistas por el distribuidor; cuando es posible este documento referencia los comandos SMS del VL501 que se usan frecuentemente para aplicar los ajustes públicos de servidor de Plaspy.

## Visión general de la configuración

Preparar un VL501 para Plaspy significa configurar sus ajustes celulares y GPRS para que el dispositivo pueda enviar posiciones GNSS y eventos al endpoint y puerto compartido de Plaspy. Los comandos SMS de ejemplo a continuación muestran los pasos comunes que los instaladores siguen para ajustar la zona horaria, el APN, el servidor, la frecuencia de reporte y el modo GPRS.

- Configurar el APN del dispositivo para que pueda establecer una conexión de datos con Plaspy
- Apuntar los ajustes del servidor del dispositivo al dominio o IP del servidor Plaspy y usar el puerto que Plaspy espera
- Definir un intervalo de reporte para que las posiciones y eventos se envíen con la cadencia deseada
- Activar el modo GPRS/datos para que las ubicaciones y eventos en buffer se suban a Plaspy cuando haya cobertura
- Verificar que el rastreador reporte a Plaspy y confirmar la visibilidad en la plataforma

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP (el dispositivo puede configurarse para usar UDP o TCP)
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Un VL501 con alimentación y acceso a su interfaz de configuración por SMS o a la herramienta oficial de configuración del fabricante
- Una tarjeta SIM activa con capacidad de datos instalada y la información del APN disponible
- Capacidad para enviar comandos SMS al número del dispositivo o usar la herramienta de configuración Concox
- Anote o registre el IMEI del dispositivo para identificarlo en Plaspy después del aprovisionamiento
- Cobertura celular en el área de despliegue para permitir el registro GPRS y el reporte
- Acceso a una cuenta Plaspy o al flujo de aprovisionamiento para confirmar que el dispositivo sea visible después de la configuración

## Cómo se conecta este rastreador a Plaspy

El VL501 se configura para reportar sus posiciones GNSS y la telemetría de eventos a Plaspy usando el endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo tenga un APN funcional y el modo GPRS habilitado, establecerá una conexión TCP o UDP con el servidor Plaspy y subirá datos en vivo y en buffer para que el dispositivo aparezca en la plataforma.

- El dispositivo envía mensajes de ubicación y eventos al endpoint d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- Plaspy detecta automáticamente el protocolo del dispositivo cuando el rastreador se conecta al puerto compartido
- Los datos almacenados en buffer localmente en el VL501 se suben a Plaspy cuando el enlace celular está disponible
- La telemetría y eventos como movimiento, desconexión de alimentación, geovalla y SOS se entregan a Plaspy para alertas e informes
- El uso de TCP o UDP es configurable en el dispositivo si el firmware requiere una selección explícita del transporte

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración por SMS de Concox o utilice el software de configuración recomendado por el fabricante
2. Configure la zona horaria del equipo y el APN del operador mediante SMS o con la herramienta del fabricante
3. Ingrese los ajustes del servidor de Plaspy usando ya sea el dominio d.plaspy.com o la IP 54.85.159.138 y establezca el puerto 8888
4. Elija UDP o TCP como transporte si el dispositivo requiere esta selección durante la configuración del servidor
5. Active GPRS o el modo de datos en el dispositivo y ajuste el temporizador de reporte o el intervalo de latido
6. Aplique y guarde la configuración, luego reinicie el dispositivo si es necesario para aplicar los cambios
7. Valide que el dispositivo reporte a Plaspy confirmando que aparece y envía datos a la plataforma

## Comandos de configuración de ejemplo

El VL501 puede configurarse usando comandos SMS. A continuación están los comandos publicados comúnmente en el orden que se suele emplear al aprovisionar un equipo para Plaspy.

- Reinicio de fábrica opcional (usar solo cuando sea necesario)
```
FACTORY#
```

- Establecer la zona horaria a UTC 0
```
GMT,E,0#
```

- Configurar el APN del operador
- Reemplace {{apn}} con el APN de su proveedor de SIM. Si su operador requiere usuario o contraseña, incluya {{apnu}} y {{apnp}} según sea necesario.
```
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Establecer el servidor GPRS a Plaspy usando el dominio y puerto
```
SERVER,1,d.plaspy.com,8888,0#
```

- Alternativa: establecer el servidor GPRS usando la IP del servidor Plaspy y el puerto
```
SERVER,0,54.85.159.138,8888,0#
```

- Configurar el intervalo de actualización de reporte a cada 60 segundos (dos formatos comunes)
```
TIMER,60#
```
o
```
TIMER,60,60#
```

- Activar modo GPRS
```
GPRSON,1#
```

- Consultar los parámetros actuales
```
GPRSSET#
```

Notas sobre marcadores y alternativas:
- {{apn}} es un marcador para el APN de su operador. Si su operador requiere usuario o contraseña para el APN, incluya los marcadores {{apnu}} y {{apnp}} tal como se indican.
- Los ejemplos del comando SERVER muestran dos formas de establecer el endpoint: una con el dominio de Plaspy y otra con la IP. Use la forma que su política de aprovisionamiento requiera.
- El comando FACTORY# restaura la configuración de fábrica y debe usarse solo cuando sea necesario durante una instalación inicial o una sesión de resolución de problemas.

## Consideraciones de configuración

- La configuración por SMS es un método común y documentado por el fabricante para el VL501; utilice la referencia oficial de comandos de Concox para comandos alternativos o extendidos
- Las variaciones de firmware o las revisiones de hardware pueden cambiar los comandos disponibles y su comportamiento; confirme los comandos según la versión de firmware del dispositivo
- Elija TCP o UDP según los requisitos de la instalación; Plaspy acepta ambos y detectará el protocolo automáticamente al conectar
- Conserve los marcadores como {{apn}} al componer comandos SMS y reemplácelos con sus datos específicos antes de enviar
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará automáticamente el protocolo del dispositivo cuando el rastreador se conecte al puerto 8888

## Por qué usar Plaspy con esta configuración

Configurar el Concox VL501 para que reporte a Plaspy ofrece un camino sencillo hacia el rastreo en tiempo real, monitoreo de eventos y reportes a nivel de flota usando ajustes de servidor compartidos. El diseño plug and play del VL501, su comportamiento de buffer y su conjunto de eventos lo hacen práctico para despliegues rápidos, mientras Plaspy brinda visibilidad centralizada, alertas y reproducción histórica.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Confirme los métodos de configuración específicos del dispositivo y los detalles más recientes del fabricante en el sitio web de Concox https://www.iconcox.com/ ya que el comportamiento del firmware y las instrucciones del fabricante pueden cambiar con el tiempo.
