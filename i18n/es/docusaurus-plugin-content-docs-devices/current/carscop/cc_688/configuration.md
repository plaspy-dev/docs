---
slug: /carscop/cc_688/configuration
id: cc_688-configuration
sidebar_label: Configuration
title: Carscop - CC-688 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Carscop CC-688 y compatibilidad con Plaspy
keywords:
  - Configuración Carscop CC-688
  - Instalación Carscop CC-688
  - Configuración CC-688 Plaspy
  - Configuración rastreador Carscop
  - Configuración servidor CC-688
  - Configuración GPS CC-688
  - Configuración rastreador Plaspy
  - Configuración rastreador de vehículo
  - Configuración GPS para gestión de flotas
  - Configuración rastreador para car sharing
---

# Carscop - Configuración del CC-688

Esta página documenta el contexto público de configuración para usar la caja telemática Carscop CC-688 (T Box) con Plaspy. Describe los ajustes compartidos del servidor Plaspy y los pasos prácticos usados comúnmente para apuntar el CC-688 a Plaspy, de modo que la ubicación, la telemetría y los datos de control lleguen a la plataforma. Utilice esta guía junto con la documentación del fabricante para detalles completos de instalación y seguridad.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del vendedor. Cuando el CC-688 soporte la programación de parámetros por SMS, se incluyen ejemplos de comandos SMS basados en cadenas públicas; confirme el comportamiento del equipo con la documentación de Carscop y la versión de firmware instalada.

## Resumen de la configuración

El objetivo de la configuración es preparar el CC-688 para que se comunique de forma confiable con Plaspy y aparezca en su flota con las capacidades de telemetría y control esperadas. En unidades CC-688 esto usualmente implica asegurar la conectividad celular, establecer APN y parámetros de servidor, y permitir que el dispositivo mantenga una conexión persistente con la plataforma.

- Configure APN y credenciales de red para que el CC-688 use datos móviles y alcance Plaspy.
- Ajuste el dispositivo para que reporte al endpoint y puerto del servidor Plaspy para entregar la telemetría.
- Valide la selección de transporte y la conectividad para que la unidad sea visible en Plaspy.
- Habilite modos de conexión persistente o ajustes keepalive para que el rastreador permanezca en línea.
- Verifique el reenvío de telemetría CANBUS y OBD si la telemetría del vehículo es necesaria para sus procesos.

## Ajustes del servidor Plaspy

- El dominio del servidor d.plaspy.com debe usarse cuando el dispositivo acepte un nombre de host.
- La IP del servidor 54.85.159.138 puede usarse cuando el dispositivo requiere una dirección IP explícita.
- El puerto 8888 es el puerto que usa Plaspy para todos los dispositivos soportados y debe configurarse en el rastreador.
- Soporte de transporte UDP o TCP según las opciones de configuración del dispositivo; elija el transporte requerido por su firmware o instalación.
- Plaspy realiza detección automática de protocolo, por lo que la plataforma acepta conexiones usando los protocolos de rastreadores soportados sin necesidad de seleccionar el protocolo por dispositivo.

Nota: Plaspy usa el mismo puerto en los dispositivos soportados y detectará automáticamente el protocolo del rastreador cuando este se conecte al endpoint del servidor.

## Requisitos típicos antes de la configuración

- Dispositivo alimentado e instalado con antenas apropiadas conectadas y cableado del vehículo completado por un instalador calificado.
- Tarjeta SIM activa con datos habilitados y credenciales APN correctas para el operador móvil.
- Acceso al método de configuración de Carscop que vaya a utilizar, como la programación por SMS o la herramienta de configuración del proveedor.
- La contraseña conocida del dispositivo para configuración por SMS (la contraseña por defecto usada en los ejemplos públicos es 123456).
- Ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) disponibles para ingresar en la configuración del equipo.
- Un método para confirmar que el dispositivo reporta, por ejemplo una cuenta Plaspy donde pueda ver la telemetría entrante.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el CC-688 reenvía posición GNSS, telemetría del vehículo y datos de eventos al endpoint y puerto compartido de Plaspy para que los gestores de flota puedan ver la ubicación en tiempo real y controlar dispositivos desde la plataforma. Plaspy recibe los flujos de datos por el transporte configurado y mapea los mensajes del dispositivo a la plataforma de forma automática.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy usando el parámetro de servidor o IP del dispositivo.
- El CC-688 entrega datos de ubicación GNSS y movimiento a Plaspy para rastreo en tiempo real y reproducción del historial.
- La telemetría CANBUS y OBD II del CC-688 se reenvía a Plaspy para datos de motor y sensores cuando está disponible.
- Señales de eventos y alarmas (por ejemplo apertura de puertas, ignición o impactos) se envían a Plaspy para notificación y registro inmediatos.
- El dispositivo puede mantener un estado en línea persistente para que Plaspy reciba actualizaciones oportunas y comandos remotos.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Carscop, como los comandos de parámetros por SMS o la herramienta de configuración recomendada por el instalador.
2. Ingrese la información del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto 8888 como puerto del servidor; Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP como transporte si el dispositivo requiere selección explícita de transporte.
5. Aplique o guarde la configuración en el dispositivo y envíe los SMS necesarios si utiliza configuración por SMS.
6. Reinicie o haga un ciclo de alimentación del dispositivo si el fabricante lo requiere para aplicar los nuevos parámetros de red.
7. Valide que el dispositivo reporte a Plaspy confirmando que la unidad aparece y envía telemetría a su cuenta Plaspy o revisando los registros de conexión del equipo.

## Comandos de configuración de ejemplo

El CC-688 soporta programación de parámetros vía SMS. Los comandos de ejemplo siguientes se basan en cadenas de configuración públicas. La contraseña por defecto del dispositivo usada en estos ejemplos es 123456. Envíe estos comandos desde un número autorizado al equipo cuando se requiera configuración por SMS. Preserve los marcadores de posición tal como se muestran.

- Comando opcional de reinicio o restablecimiento de fábrica
```text
RESET*123456
```

- Establecer la zona horaria a UTC
```text
TIMEZONE*123456*+00
```

- Configurar el APN de su operador móvil
```text
APN*123456*{{apn}}
```
Explicación: reemplace {{apn}} por la cadena APN de su operador.

- Establecer usuario y contraseña del APN cuando el operador lo requiera
```text
USERNAME*123456*{{apnu}}*{{apnp}}
```
Explicación: reemplace {{apnu}} por el usuario del APN y {{apnp}} por la contraseña del APN. Solo es necesario si su operador exige credenciales.

- Configurar el servidor GPRS a Plaspy usando IP y puerto
```text
IP*123456*54.85.159.138,8888
```
Nota: este comando define la IP y el puerto del servidor Plaspy. Si su firmware admite nombres de host en el campo IP/servidor, consulte la documentación de Carscop para usar d.plaspy.com en lugar de la IP numérica.

- Mantener el rastreador en línea con comportamiento keepalive
```text
KEEPONLINE*123456
```
Explicación: este comando solicita un comportamiento de conexión persistente para que la unidad mantenga la conexión y reporte oportunamente.

Importante: el orden de comandos anterior sigue la secuencia pública típica de configuración. Use el comando de reinicio solo cuando sea necesario para la configuración inicial o para borrar ajustes previos, y confirme los pasos de reinicio requeridos en la documentación del dispositivo.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos SMS disponibles y los nombres de parámetros; siempre verifique los comandos según la versión de firmware instalada.
- El CC-688 soporta configuración por SMS como se muestra aquí, y puede que existan también software del proveedor o herramientas de aprovisionamiento para cambios masivos u OTA.
- Elija UDP o TCP según la guía del instalador y el firmware del dispositivo; Plaspy soporta ambos y detectará el protocolo automáticamente en la conexión.
- Cambie la contraseña por defecto del dispositivo (123456) después de la configuración inicial cuando sea posible para mejorar la seguridad.
- Configurar el servidor por IP es fiable para dispositivos que no resuelven nombres de host; cuando exista soporte de hostname, utilice d.plaspy.com en lugar de la IP numérica.

## Por qué usar Plaspy con esta configuración

Usar el CC-688 con Plaspy ofrece un camino integrado hacia ubicación en tiempo real y telemetría vehicular para operaciones de flotas, alquiler y car sharing. La combinación de reenvío de telemetría del vehículo, control remoto de actuadores y las funciones de la plataforma Plaspy ayuda a los operadores a monitorear activos, responder a alarmas y ejecutar acciones remotas desde una única plataforma de gestión de flotas.

Para conocer más sobre Plaspy y las integraciones soportadas visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que le recomendamos verificar las referencias de configuración y comandos más recientes en el sitio del fabricante http://www.carscop.com/ antes de desplegar.
