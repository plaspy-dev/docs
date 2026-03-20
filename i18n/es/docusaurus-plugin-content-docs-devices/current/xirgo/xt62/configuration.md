---
slug: /xirgo/xt62/configuration
id: xt62-configuration
sidebar_label: Configuration
title: Xirgo - XT62 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Xirgo XT62 con ajustes de servidor Plaspy, comandos SMS y flujo práctico de preparación
keywords:
  - Configuración Xirgo XT62
  - Configuración XT62 Plaspy
  - Configuración rastreador Xirgo
  - Configuración servidor XT62
  - Configuración rastreador GPS XT62
  - Configuración dispositivo Plaspy
  - rastreador cadena de frío activo
  - rastreador reefer XT62
  - comandos SMS XT62
  - configuración seguimiento de flotas
---

# Xirgo - Configuración XT62

Esta página documenta el contexto público de configuración para usar el rastreador de activos Xirgo XT62 con Plaspy. Reúne los ajustes de servidor prácticos, los comandos SMS publicados y un flujo paso a paso para preparar el dispositivo y que reporte ubicación y telemetría de condición en Plaspy para visibilidad unificada.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ejemplo del XT62 más abajo incluye los comandos SMS que comúnmente se publican para APN y configuración de servidor GPRS; trate estos comandos como un ejemplo público y confirme la sintaxis exacta con la documentación de Xirgo o las instrucciones del proveedor.

## Resumen de la configuración

El proceso de configuración prepara el XT62 para comunicarse con Plaspy y reportar ubicación además de telemetría de cadena fría, como temperatura y eventos de puerta. El objetivo es configurar el APN del equipo y el destino del servidor, validar la conectividad y confirmar que el rastreador sea visible en la plataforma Plaspy.

- Configurar el APN del dispositivo para que el enlace celular pueda registrarse en la red móvil y enviar datos.
- Señalar el dispositivo hacia los ajustes del servidor Plaspy para que la telemetría se reenvíe a Plaspy para mapeo y alertas.
- Validar los ajustes de transporte y la conectividad para asegurar el reporte oportuno de ubicación y eventos de sensores.
- Guardar y aplicar la configuración y luego confirmar que el dispositivo aparece y reporta datos en Plaspy.
- Utilizar los comandos SMS públicos indicados más abajo cuando el dispositivo o las herramientas del proveedor soporten configuración por SMS.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP; configure el dispositivo en cualquiera de los dos si lo requiere
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que todos los dispositivos pueden usar el mismo puerto Plaspy

## Requisitos típicos antes de la configuración

- Dispositivo alimentado e instalado según las directrices del fabricante
- SIM activa con plan de datos y ajustes APN correctos del operador móvil
- Capacidad de enviar SMS al número del dispositivo si la configuración por SMS es necesaria
- Acceso al método de configuración oficial de Xirgo o al software del proveedor/instalador
- Cuenta o acceso a la plataforma Plaspy para verificar que el dispositivo aparece y monitorear los reportes iniciales
- Conocimiento del APN del operador, usuario y contraseña de la SIM si aplica

## Cómo se conecta este rastreador a Plaspy

El XT62 se configura para enviar su telemetría y reportes de eventos al endpoint y puerto compartidos de Plaspy, de modo que los datos estén disponibles en la plataforma para mapeo, alertas e informes consolidados. Plaspy recibe el tráfico de los dispositivos en un puerto común e identifica el protocolo del rastreador automáticamente.

- El dispositivo envía ubicación y telemetría de sensores a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy acepta transporte UDP o TCP desde el rastreador y realiza la detección automática del protocolo.
- La telemetría enviada a Plaspy queda disponible para mapeo en tiempo real, alertas e informes consolidados.
- Las notificaciones de eventos, como excursiones de temperatura y aperturas de puerta, se reenvían a Plaspy para su manejo mediante reglas.
- La supervisión operativa en Plaspy permite confirmar que el dispositivo está en línea y recibiendo datos de sensores.

## Flujo de configuración común

1. Acceda al método de configuración oficial de Xirgo o al software y documentación provistos por su instalador o proveedor.
2. Configure los parámetros APN del dispositivo para la SIM instalada usando el APN del operador, usuario y contraseña si es necesario.
3. Ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138 en el campo de servidor o GPRS server.
4. Ajuste el puerto del servidor a 8888 y elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Aplique o guarde la configuración usando la herramienta del dispositivo, comandos SMS o el sistema de aprovisionamiento del proveedor.
6. Reinicie o haga un ciclo de energía del dispositivo si el firmware lo requiere para activar los nuevos ajustes.
7. Valide que el dispositivo reporta a Plaspy confirmando su presencia y telemetría en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El XT62 soporta configuración por SMS en materiales públicos. Los comandos siguientes se muestran en el orden en que normalmente se aplican. Envíe estos mensajes SMS al número del dispositivo utilizando el método de configuración SMS estándar de su proveedor o instalador.

- Configure el APN del operador (reemplace los valores entre llaves con los de su operador)

```
+XT:1002,[apnu],[apnp],[apn]
```

- Configure el servidor GPRS a Plaspy usando la IP del servidor Plaspy y el puerto 8888

```
+XT:1001,8888,54.85.159.138,4,0,0
```

Notas sobre marcadores y uso de comandos:
- [apn] es la cadena APN del operador requerida para acceso a datos.
- [apnu] es el usuario del APN cuando lo exige el operador.
- [apnp] es la contraseña del APN cuando lo exige el operador.
- Envíe primero el comando APN antes del comando de servidor GPRS para que el dispositivo pueda establecer sesión de datos.
- Estos comandos son ejemplos públicos y pueden variar según el firmware. Confirme la sintaxis exacta con la documentación de Xirgo.

## Notas de configuración

- Diferencias de firmware o herramientas de aprovisionamiento del proveedor pueden cambiar los comandos SMS disponibles o los parámetros requeridos; confirme siempre con la documentación más reciente de Xirgo.
- El XT62 puede configurarse vía comandos SMS tal como figura en materiales públicos, o mediante herramientas del fabricante cuando estén disponibles; siga el método de aprovisionamiento recomendado por su instalador.
- Elegir UDP o TCP afecta el comportamiento del transporte; Plaspy acepta ambos y realiza detección de protocolo en el puerto 8888.
- Si utiliza el dominio del servidor Plaspy en lugar de la IP, ingrese d.plaspy.com donde se solicite el nombre del servidor; la IP 54.85.159.138 se ofrece como endpoint público alterno.
- Tras aplicar la configuración, permita un breve periodo para que el dispositivo se registre en la red móvil y comience a enviar telemetría.

## Por qué usar Plaspy con esta configuración

Usar el XT62 con Plaspy integra la telemetría de activos refrigerados y la ubicación para una supervisión operativa unificada. Plaspy consolida temperatura, eventos de puerta y señales I/O del XT62 con los reportes de ubicación para que los equipos puedan monitorear condiciones de la cadena fría, recibir alertas por excursiones y mantener trazabilidad para cumplimiento y manejo de incidentes.

To learn more about Plaspy and supported configurations visit https://www.plaspy.com. Manufacturer specifications and setup commands can change, so verify the latest device specific configuration and firmware details on the official Xirgo site https://xirgo.com/.
