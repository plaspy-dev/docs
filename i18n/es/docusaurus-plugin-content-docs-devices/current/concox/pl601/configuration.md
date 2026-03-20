---
slug: /concox/pl601/configuration
id: pl601-configuration
sidebar_label: Configuration
title: Concox - PL601 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar el Concox PL601 para usar con Plaspy con ajustes públicos de servidor y comandos SMS de ejemplo
keywords:
  - Configuración Concox PL601
  - Configuración PL601 Plaspy
  - Configuración servidor Concox PL601
  - Configuración rastreador GPS PL601
  - Comandos SMS configuración PL601
  - Configuración dispositivo Plaspy
  - Configuración software seguimiento PL601
  - Configuración plataforma GPS Concox PL601
  - Ajustes APN GPRS PL601
  - Conectividad PL601 para Plaspy
---

# Concox - Configuración del PL601

Esta página describe el contexto público de configuración para usar el rastreador Concox PL601 con Plaspy. Reúne los ajustes de servidor públicos que necesita Plaspy y muestra comandos SMS de ejemplo basados en las instrucciones del fabricante cuando están disponibles. Utilice esta guía para preparar el equipo y que pueda enviar ubicación y eventos a Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta el protocolo del rastreador automáticamente en el servidor. Sin embargo, los pasos exactos en el lado del fabricante pueden variar según la firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. El PL601 puede configurarse por SMS o mediante herramientas locales como una app BLE; esta página incluye ejemplos públicos de SMS y orientación para conectar el dispositivo a Plaspy.

## Resumen de la configuración

El objetivo de este proceso es preparar el PL601 para comunicarse de forma fiable con Plaspy, validar la conectividad y activar el reporte de ubicación y eventos dentro de la plataforma. Los comandos públicos y los valores de servidor que aparecen a continuación son los elementos principales que los operadores deben establecer al aprovisionar un PL601 para integrarlo con Plaspy.

- Apuntar el PL601 al endpoint del servidor Plaspy para que las ubicaciones y eventos lleguen a la plataforma.
- Configurar el APN del dispositivo para que el rastreador pueda usar datos móviles y reportar vía GPRS.
- Seleccionar el transporte (UDP o TCP) y establecer el puerto compartido de Plaspy para alcanzar el endpoint correcto.
- Verificar el intervalo de actualización y el modo GPRS para que el equipo envíe reportes periódicos a Plaspy.
- Validar la configuración con un comando de comprobación de parámetros y confirmar que el dispositivo aparece en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son los ajustes públicos y compartidos que Plaspy utiliza para los dispositivos compatibles. El PL601 puede apuntar tanto al dominio del servidor como a la IP en el mismo puerto.

## Requisitos previos

- Un dispositivo PL601 cargado, accesible para configuración y encendido.
- Una tarjeta SIM válida con datos habilitados y el APN correcto del operador móvil.
- Acceso al método de configuración del fabricante que prefiera, por ejemplo la configuración por SMS o herramientas BLE.
- Conocimiento básico del IMEI o identificador del dispositivo para confirmar su aparición en Plaspy tras la configuración.
- Un teléfono capaz de enviar SMS al rastreador si usa el flujo de comandos SMS.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el PL601 envía mensajes de ubicación, eventos y estado al endpoint y puerto del servidor Plaspy para que la plataforma ingiera la telemetría, muestre la ubicación en tiempo real y genere alertas. El rastreador se ajusta para reportar al endpoint y puerto compartidos de Plaspy y el sistema detecta el protocolo automáticamente.

- El PL601 utiliza la conexión celular para abrir una sesión GPRS y enviar actualizaciones a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según las opciones del equipo; Plaspy acepta ambos y detecta el protocolo.
- Eventos del dispositivo como SOS/pánico y reportes periódicos son reenviados a Plaspy para alertas e historial.
- Tras el aprovisionamiento, la visibilidad en Plaspy se valida confirmando que el dispositivo reporta y aparece en la plataforma.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software, como la app BLE del PL601 o la interfaz de comandos SMS.
2. Si usa SMS o la interfaz del dispositivo, ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138.
3. Establezca el puerto en 8888 en los ajustes de servidor del equipo.
4. Seleccione el transporte UDP o TCP si el dispositivo lo requiere.
5. Configure el APN del dispositivo usando los marcadores de APN del operador si es necesario y habilite el modo GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo requieren.
7. Valide que el dispositivo informe a Plaspy comprobando los parámetros y confirmando que el equipo aparece en la plataforma.

## Comandos de configuración de ejemplo

El PL601 admite configuración vía SMS usando estos comandos públicos. Conserve los marcadores y envíe los comandos en el orden mostrado para el aprovisionamiento inicial. El comando de restauración es opcional y se usa normalmente solo al configurar por primera vez o para solucionar problemas.

- Restaurar a ajustes de fábrica (paso inicial opcional)
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
```text
APN,{{apn}}[ ,{{apnu}},{{apnp}} ]#
```
Explicación: {{apn}} es el APN del operador móvil. {{apnu}} y {{apnp}} son opcionales y representan usuario y contraseña del APN si el operador los requiere. Mantenga los marcadores si su operador utiliza credenciales.

- Configurar el servidor GPRS a Plaspy usando el dominio (recomendado por flexibilidad)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- O configurar el servidor GPRS a Plaspy usando la IP del servidor
```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización cada 60 segundos
```text
TIMER,60#
```
Comando alternativo de intervalo (algunas variantes de firmware)
```text
TIMER,60,60#
```

- Habilitar modo GPRS
```text
GPRSON,1#
```

- Consultar los parámetros actuales de GPRS y servidor
```text
GPRSSET#
```

Nota: Envíe estos comandos como SMS al número del dispositivo si usa la configuración por SMS. El orden importa para el aprovisionamiento inicial: primero APN, luego servidor, después timer y modo GPRS, y finalmente verifique con GPRSSET#.

## Notas sobre la configuración

- Las variantes de firmware y regionales pueden cambiar la sintaxis de comandos o los parámetros soportados; confirme siempre con la documentación del fabricante para su variante del PL601.
- El PL601 soporta configuración por SMS como se muestra arriba; BLE o el software del vendedor pueden ofrecer una experiencia de aprovisionamiento alternativa.
- Plaspy usa el puerto 8888 para todos los dispositivos y detecta el protocolo automáticamente, pero la selección de transporte en el dispositivo (UDP vs TCP) puede ser necesaria.
- Cuando sea posible, prefiera el dominio d.plaspy.com para permitir cambios de IP en el backend sin reprovisionar dispositivos; use la IP del servidor cuando no haya DNS disponible.
- Verifique el APN, el plan de datos de la SIM y la calidad de señal antes de depender del reporte en tiempo real a Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el PL601 para reportar a Plaspy ofrece una solución de rastreo compacta y eficiente en batería que integra ubicación, alertas SOS y eventos del dispositivo en una única plataforma para monitoreo y respuesta. Para operadores que requieren seguridad personal, visibilidad de activos pequeños o telemetría ligera, conectar el PL601 a Plaspy proporciona ubicación en tiempo real, notificaciones de eventos y reproducción histórica dentro de su despliegue Plaspy.

Para saber más sobre Plaspy y los enfoques de configuración de dispositivos compatibles visite https://www.plaspy.com. Para métodos específicos del dispositivo, notas de firmware e instrucciones detalladas del PL601, verifique la información con el fabricante en https://www.iconcox.com/ ya que el comportamiento de hardware y firmware puede cambiar con el tiempo.
