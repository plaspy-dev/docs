---
slug: /teltonika/fmt100/configuration
id: fmt100-configuration
sidebar_label: Configuration
title: Teltonika - FMT100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika FMT100 con Plaspy incluyendo ajustes de servidor y comandos de ejemplo
keywords:
  - Configuración Teltonika FMT100
  - Configuración FMT100
  - Configuración servidor FMT100
  - Configuración Plaspy FMT100
  - Configuración rastreador GPS Plaspy
  - Configuración GPS Teltonika
  - Configuración software seguimiento FMT100
  - Configuración plataforma GPS FMT100
  - Ajustes APN Teltonika FMT100
  - Integración rastreador Plaspy
---

# Teltonika - Configuración del FMT100

Esta página describe el contexto público de configuración para usar el Teltonika FMT100 con Plaspy. Reúne los ajustes de servidor prácticos y un comando de ejemplo que se emplea en flujos de configuración públicos de Teltonika, para que pueda preparar el dispositivo y enviar datos de ubicación y eventos a Plaspy para seguimiento y reporte en tiempo real.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La configuración mostrada a continuación para el FMT100 ilustra un patrón común de comando de parámetros Teltonika y mantiene marcadores APN donde corresponda.

## Resumen de configuración

El objetivo es dejar el FMT100 listo para comunicarse de forma fiable con Plaspy y verificar que el dispositivo aparezca en la plataforma. El ejemplo público de comando en esta página muestra cómo establecer el APN y los parámetros del servidor en un solo lote y presenta el endpoint que Plaspy espera.

- Configure el APN y las credenciales de la SIM para que el dispositivo tenga conectividad móvil
- Ingrese el host y el puerto del servidor Plaspy para que el rastreador reporte al endpoint correcto
- Seleccione el tipo de transporte UDP o TCP si el dispositivo lo requiere
- Guarde y aplique los ajustes para que el rastreador pueda iniciar sesiones hacia Plaspy
- Verifique la conectividad confirmando que el dispositivo aparece y reporta en Plaspy

## Ajustes del servidor Plaspy

Utilice estos valores públicos de Plaspy al configurar el FMT100 o al introducir los valores de servidor en las herramientas de Teltonika:

- Dominio de servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos habituales antes de la configuración

- El dispositivo tiene alimentación y la batería o montaje completados, o está conectado a una fuente de energía adecuada
- SIM activa con plan de datos y credenciales APN correctas para la red móvil
- Acceso al método oficial de configuración Teltonika soportado por su unidad, como comandos SMS de parámetros o las herramientas de configuración del fabricante
- Conocimientos básicos de los valores APN, incluyendo nombre de APN y opcionalmente nombre de usuario y contraseña del APN
- Una cuenta en Plaspy y la posibilidad de verificar que el dispositivo aparece en la plataforma después de la configuración

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para apuntar a Plaspy, el FMT100 envía su ubicación, mensajes de evento y datos de sensores al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda mostrar y procesar la telemetría entrante. Plaspy ingiere estos mensajes, aplica la detección de protocolo y asigna los datos al registro de dispositivo correspondiente.

- El rastreador se configura para reportar al host d.plaspy.com en el puerto 8888
- El dispositivo usa conectividad móvil GSM gestionada por el APN configurado para alcanzar Plaspy
- Plaspy acepta tanto UDP como TCP y detecta automáticamente el protocolo del dispositivo
- Mensajes basados en eventos, como alertas del acelerómetro y valores de sensores BLE, son incorporados en Plaspy para alertas y reportes
- Una vez que el dispositivo reporta con éxito, los datos de ubicación y eventos se muestran en los paneles de Plaspy

## Flujo de configuración típico

1. Acceda al método oficial de configuración Teltonika o al software para el FMT100, por ejemplo comandos SMS de parámetros o la herramienta del proveedor.
2. Ingrese el host del servidor Plaspy como d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto del servidor en 8888 como puerto de destino para las comunicaciones del dispositivo.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte durante la configuración.
5. Aplique o guarde la configuración para que los parámetros se escriban en el dispositivo.
6. Reinicie el dispositivo si la documentación del fabricante recomienda un reinicio para aplicar los ajustes.
7. Verifique que el dispositivo reporte a Plaspy comprobando su aparición en la plataforma y la llegada de telemetría.

## Comandos de configuración de ejemplo

El ejemplo público de configuración para el FMT100 utiliza un comando por lotes de parámetros Teltonika para establecer APN y parámetros de servidor en un solo paso. Mantenga los marcadores cuando sustituya por sus valores de red.

- Ejemplo de comando por lotes de parámetros Teltonika

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre los marcadores y los campos
- {{apn}} es el nombre del APN proporcionado por su operador móvil
- {{apnu}} es el nombre de usuario del APN si el operador lo requiere; deje vacío si no se usa
- {{apnp}} es la contraseña del APN si el operador la solicita; deje vacío si no se usa
- 2004 configura el host del servidor a d.plaspy.com como requiere Plaspy
- 2005 configura el puerto del servidor en 8888, que es el puerto compartido de Plaspy para todos los dispositivos
- 2006 selecciona el transporte donde 1 en este ejemplo generalmente indica un modo de transporte soportado por el dispositivo; consulte la documentación de parámetros de Teltonika para el mapeo numérico

Puede reemplazar d.plaspy.com con la IP del servidor Plaspy 54.85.159.138 si su herramienta de configuración prefiere direcciones numéricas. Confirme siempre los IDs de parámetros y el mapeo de valores de transporte según la guía oficial de Teltonika para su versión de firmware.

## Notas de configuración

- Diferencias de firmware y herramientas pueden cambiar los IDs de parámetros, comandos disponibles o el mapeo de valores de transporte; consulte siempre la documentación de Teltonika correspondiente a su firmware.
- Si su dispositivo soporta ajuste de parámetros por SMS, mantenga el formato con cuidado y pruebe con un cambio de parámetro único antes de enviar varios en lote.
- Elija UDP o TCP según sus necesidades de red y fiabilidad; Plaspy acepta ambos y detecta el protocolo automáticamente a nivel de plataforma.
- Use el dominio d.plaspy.com por defecto, pero la IP pública 54.85.159.138 está disponible cuando su flujo de configuración requiere una IP.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, lo que simplifica la entrada de servidor en flotas mixtas

## Por qué usar Plaspy con esta configuración

Configurar el FMT100 para reportar a Plaspy proporciona visibilidad centralizada de ubicación, eventos impulsados por el acelerómetro y lecturas de sensores BLE desde un rastreador compacto montado en batería. Esa visibilidad apoya la supervisión operativa, la detección de incidentes y los flujos de trabajo de estado de activos sin la necesidad de gestionar servidores por dispositivo, gracias al endpoint compartido y la detección automática de protocolos de Plaspy.

Para saber más sobre Plaspy y las funcionalidades de la plataforma, visite https://www.plaspy.com. Para métodos de configuración específicos por dispositivo, comportamiento de firmware y detalles del fabricante, verifique la información actual en el sitio de Teltonika https://www.teltonika-gps.com/.
