---
slug: /teltonika/fmm80a/configuration
id: fmm80a-configuration
sidebar_label: Configuration
title: Teltonika - FMM80A Configuration
sidebar_class_name: menu_item_tracker
description: Configure su Teltonika FMM80A para Plaspy con ejemplo de servidor y comandos para despliegue OBD II
keywords:
  - Configuración Teltonika FMM80A
  - Configuración FMM80A
  - Configuración rastreador GPS Teltonika
  - Integración Plaspy
  - Configuración rastreador GPS OBD II
  - Configuración seguimiento de flotas
  - Ajustes de servidor para rastreador GPS
  - Guía Teltonika Configurator
  - Configuración seguimiento en tiempo real
  - Configuración dispositivo telemática
---

# Teltonika - FMM80A Configuración

Esta página ofrece orientación pública para configurar el Teltonika FMM80A con Plaspy. Incluye los ajustes de servidor compartidos que Plaspy espera, un ejemplo de comando para establecer parámetros básicos de conexión y un flujo de trabajo práctico para preparar un FMM80A y que reporte a Plaspy. La información está dirigida a integradores, técnicos y administradores que preparan dispositivos para flotas o rentas.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; utilice los métodos de Teltonika (SMS, Configurator o gestión remota) apropiados para su firmware y dispositivo. El comando de ejemplo que se muestra a continuación ilustra cómo aplicar parámetros básicos de APN y servidor Plaspy en un FMM80A.

## Resumen de la configuración

Preparar el FMM80A para Plaspy se centra en proporcionar al dispositivo una ruta de datos válida y un endpoint objetivo para que pueda empezar a enviar telemetría y actualizaciones de posición a la plataforma Plaspy. El flujo de trabajo suele garantizar que el dispositivo tenga acceso a la red, credenciales APN correctas y el servidor Plaspy configurado; luego se valida que los datos lleguen a Plaspy.

- Configure las credenciales APN del dispositivo para que el rastreador use datos móviles.
- Indique al dispositivo que reporte a Plaspy usando el endpoint y puerto compartidos.
- Seleccione el transporte (UDP o TCP) si el dispositivo requiere una selección explícita.
- Aplique y guarde la configuración usando las herramientas de Teltonika o comandos SMS.
- Valide la conectividad confirmando que el FMM80A aparece y reporta en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto para el reporte

## Requisitos típicos antes de la configuración

- Dispositivo instalado y alimentado conforme a las instrucciones de Teltonika (este modelo se conecta al puerto OBD II).
- SIM activa con plan de datos y ajustes APN correctos para el proveedor móvil.
- Acceso a métodos de configuración de Teltonika como comandos SMS, Teltonika Configurator o herramientas de gestión remota.
- Credenciales y detalles del APN (nombre APN, usuario APN, contraseña APN) si su proveedor los requiere.
- Cuenta en Plaspy o flujo de registro de dispositivos para vincular los reportes a su organización.
- Anote la versión de firmware del dispositivo para seguir instrucciones relevantes a esa versión.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el FMM80A envía posición GPS y telemetría soportada al endpoint y puerto del servidor Plaspy. Plaspy recibe esos mensajes y reconoce el protocolo automáticamente, permitiendo que el dispositivo se muestre en mapas en vivo, active alertas y rellene informes históricos.

- El rastreador se configura para reportar al endpoint de Plaspy d.plaspy.com (o a la IP 54.85.159.138) en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según las opciones del dispositivo; Plaspy acepta ambos en el mismo puerto.
- Plaspy detecta el protocolo del dispositivo automáticamente, por lo que el rastreador puede comenzar a reportar sin seleccionar manualmente el protocolo en la plataforma.
- Las actualizaciones de ubicación, notificaciones de eventos y mensajes de telemetría se reenvían a Plaspy para monitorización y alertas.
- Una vez visible el dispositivo en Plaspy, utilice los paneles de la plataforma para confirmar el reporte regular de posiciones y eventos.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Teltonika para su FMM80A (SMS, Configurator o gestión remota).
2. Introduzca el servidor Plaspy como dominio d.plaspy.com o la dirección IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Seleccione UDP o TCP como transporte si su dispositivo requiere una selección explícita.
5. Configure el APN y las credenciales relacionadas para que el dispositivo tenga acceso a datos móviles.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el equipo recomienda un reinicio.
7. Valide que el dispositivo reporte a Plaspy comprobando que aparece en su cuenta Plaspy y que confirma posiciones o mensajes de telemetría recientes.

## Comandos de configuración de ejemplo

El FMM80A puede configurarse mediante SMS de Teltonika o comandos masivos para establecer parámetros APN y servidor. El siguiente ejemplo público muestra cómo aplicar parámetros básicos en un solo comando. Reemplace los marcadores con los datos del APN de su operador según sea necesario.

- Comando de ejemplo para establecer APN y parámetros del servidor Plaspy

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre los marcadores de posición
- {{apn}} — Nombre del APN proporcionado por su operador móvil.
- {{apnu}} — Usuario del APN si el proveedor lo requiere; dejar vacío si no aplica.
- {{apnp}} — Contraseña del APN si el proveedor lo requiere; dejar vacío si no aplica.

Este ejemplo puede enviarse por SMS o aplicarse mediante Teltonika Configurator según el flujo de trabajo de configuración elegido y el firmware del dispositivo.

## Notas de configuración

- Los dispositivos Teltonika suelen admitir configuración vía SMS y la herramienta Teltonika Configurator; siga el método recomendado para su versión de firmware.
- La selección de transporte entre TCP y UDP puede afectar características de entrega de mensajes; elija según su instalación y las limitaciones de la red.
- Plaspy utiliza el mismo puerto para todos los dispositivos y realiza detección automática del protocolo, por lo que los valores clave a aplicar en el dispositivo son servidor y puerto.
- Diferencias de firmware o revisiones de hardware pueden cambiar los IDs de parámetros o los comandos soportados; confirme los números de parámetro con la documentación de Teltonika para su firmware.
- Use las herramientas de gestión remota del fabricante para actualizaciones masivas o FOTA cuando gestione muchas unidades FMM80A.

## Por qué usar Plaspy con esta configuración

Configurar el FMM80A para que reporte a Plaspy ofrece un camino rápido hacia el seguimiento en vivo, alertas y visibilidad de la flota. El factor de forma OBD II plug-and-play del FMM80A y su conectividad configurable lo hacen práctico para operaciones de flota, alquiler y entrega que requieren despliegue rápido y telemetría fiable centralizada en una sola plataforma.

Para saber más sobre Plaspy y cómo incorporar dispositivos, visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware y documentación oficial de Teltonika, verifique los detalles en https://www.teltonika-gps.com/
