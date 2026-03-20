---
slug: /eelink/tk121/configuration
id: tk121-configuration
sidebar_label: Configuration
title: EElink - TK121 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el EElink TK121 y conectarlo a Plaspy con ajustes de servidor comandos SMS y comprobaciones
keywords:
  - configuración EElink TK121
  - instalación EElink TK121
  - configuración del servidor EElink TK121
  - EElink TK121 Plaspy
  - configuración de rastreador Plaspy
  - comandos SMS para rastreador GPS
  - configuración MoveLink
  - configuración de rastreador vehicular
  - ajustes APN TK121
  - ajustes de temporizador TK121
---

# EElink - TK121 Configuración

Esta página describe el contexto público de configuración para usar el rastreador GPS EElink TK121 con la plataforma Plaspy. Reúne los pasos prácticos y los comandos de configuración por SMS de acceso público que se usan para apuntar el TK121 a Plaspy, de modo que el dispositivo pueda reportar ubicación y eventos a una cuenta en Plaspy. Utilice este documento como guía práctica; consulte la documentación oficial del fabricante para detalles específicos del equipo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, por lo que los comandos y el flujo de trabajo aquí presentados son el enfoque común y públicamente compartido para integrar dispositivos TK121 con Plaspy.

## Resumen de la configuración

Este proceso prepara el TK121 para comunicarse con Plaspy y asegurar que los datos de ubicación y eventos aparezcan en la plataforma de forma confiable. El flujo de configuración público suele usar comandos por SMS o la herramienta de configuración del fabricante para ajustar el APN, el endpoint del servidor, el intervalo de reporte y comandos opcionales de restauración o verificación.

- Configurar el APN del equipo para que pueda usar datos móviles y reportar vía GPRS.
- Apuntar el dispositivo al endpoint del servidor de Plaspy para entregar la telemetría.
- Establecer un intervalo de reporte adecuado, por ejemplo 60 segundos, según las necesidades de monitoreo.
- Opcionalmente restaurar valores de fábrica antes de un despliegue para evitar parámetros en conflicto.
- Verificar parámetros de forma remota con el comando de comprobación PARAM# para confirmar conectividad.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Estos valores son los ajustes compartidos del endpoint de Plaspy usados para dispositivos TK121. Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará el protocolo correcto de forma automática.

## Requisitos habituales antes de la configuración

- Una unidad TK121 alimentada y accesible con una tarjeta SIM válida que permita datos móviles y reciba SMS.
- Información del APN del operador de la SIM para habilitar conectividad GPRS.
- Acceso al método de configuración por SMS del fabricante EElink o la herramienta oficial de configuración EElink.
- Una cuenta en Plaspy preparada para aceptar conexiones de dispositivos y con el dispositivo identificado en la plataforma.
- Familiaridad básica con el envío de comandos SMS desde un teléfono móvil o servicio y con la verificación de las respuestas del dispositivo.

## Cómo se conecta este rastreador a Plaspy

El TK121 se configura para enviar datos uplink por GPRS a Plaspy usando el endpoint y puerto compartidos. Una vez que el dispositivo apunta a Plaspy y el APN está definido, el rastreador informará actualizaciones de posición y eventos para que Plaspy pueda mostrar la ubicación en tiempo real y activar alertas o flujos de trabajo.

- El dispositivo informa posiciones GNSS y mecanismos de reserva (LBS) al endpoint de Plaspy.
- La telemetría y los eventos se entregan a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando se establece la conexión.
- El transporte puede configurarse como UDP o TCP según lo requiera el dispositivo; el puerto sigue siendo 8888.
- Las actualizaciones y alarmas reportadas se vuelven visibles en Plaspy para monitoreo y gestión de incidentes.

## Flujo común de configuración

1. Acceda al método oficial de configuración EElink para su TK121, ya sea por comandos SMS, la herramienta de configuración EElink o software del proveedor.
2. Configure el APN del dispositivo usando el comando APN con las credenciales de su operador.
3. Indique el servidor de Plaspy configurando el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
4. Establezca el puerto a 8888 en la configuración del servidor.
5. Seleccione UDP o TCP si el dispositivo requiere una selección explícita del transporte.
6. Aplique o guarde la configuración y reinicie el rastreador si el dispositivo lo solicita.
7. Valide que el equipo reporte a Plaspy comprobando parámetros y observando el estado del dispositivo en la plataforma.

Si usa el método SMS mostrado en los Comandos de Ejemplo más abajo, siga los comandos en el orden indicado y use PARAM# para verificar los ajustes.

## Ejemplo de comandos de configuración

El TK121 soporta configuración mediante SMS. A continuación se muestran los comandos SMS públicos en orden. Envíe cada comando como SMS al número del rastreador. Mantenga los marcadores de posición tal como aparecen.

- Reinicio opcional a valores de fábrica (usar solo si necesita borrar la configuración existente)
```text
FACTORY#
```

- Establecer la zona horaria en UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
Nota: [apn] es el nombre del APN de su operador. Si el operador requiere usuario o contraseña use [apnu] y [apnp] según le proporcionen. Mantenga estos marcadores y reemplácelos por los valores reales al enviar.
```text
APN,[apn][ ,[apnu],[apnp]]#
```

- Establecer el servidor GPRS usando el dominio de Plaspy (use esta forma para enviar por dominio)
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternativamente establecer el servidor GPRS usando la IP de Plaspy (use esta forma para enviar por IP)
```text
SERVER,0,54.85.159.138,8888#
```

- Fijar el intervalo periódico de actualización a 60 segundos
```text
TIMER,60#
```

- Consultar parámetros actuales en el dispositivo
```text
PARAM#
```

Use la variante del comando SERVER que prefiera, por dominio o por IP. Después de enviar los comandos SERVER y APN, dé al dispositivo un breve período para establecer la conectividad GPRS y luego use PARAM# para confirmar.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos SMS o los parámetros disponibles; siempre verifique con las notas de firmware del equipo.
- La configuración por SMS suele estar soportada en el TK121, pero las herramientas del fabricante o los portales de los proveedores pueden ofrecer alternativas con interfaz gráfica.
- Elija UDP o TCP según la preferencia del instalador o las restricciones de la red; Plaspy acepta ambos en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que el uso consistente del puerto 8888 facilita las flotas mixtas.
- Mantenga las credenciales del APN seguras y confirme los ajustes del operador antes del despliegue para evitar demoras en la conectividad.

## Por qué usar Plaspy con esta configuración

Configurar el EElink TK121 para que use Plaspy ofrece visibilidad centralizada de ubicación, estado de ignición y eventos de alarma para operaciones de flota, monitoreo de seguridad y respuesta a incidentes. Usar el endpoint compartido de Plaspy y la detección automática de protocolo reduce la complejidad por dispositivo y ayuda a estandarizar los despliegues en flotas mixtas.

Learn more about how Plaspy can manage TK121 devices and other fleet trackers at https://www.plaspy.com. For the most current device specific commands, firmware details, and manufacturer guidance verify information with the official EElink documentation at https://www.eelink.com.cn/ as methods and firmware behavior can change over time.
