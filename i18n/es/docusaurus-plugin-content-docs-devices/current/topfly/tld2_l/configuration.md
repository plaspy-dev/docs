---
slug: /topfly/tld2_l/configuration
id: tld2_l-configuration
sidebar_label: Configuration
title: TopFly - TLD2-L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopFly TLD2-L con ajustes de servidor Plaspy y comandos SMS para instalación OBDII rápida
keywords:
  - Configuración TopFly TLD2-L
  - Instalación TopFly TLD2-L
  - TopFly TLD2-L Plaspy
  - Configuración rastreador GPS TopFly
  - Instalación rastreador OBDII
  - Compatibilidad rastreador vehicular con Plaspy
  - Configuración servidor TLD2-L
  - Configuración SMS TLD2-L
  - Configuración seguimiento de flotas
  - Guía configuración rastreador GPS
---

# TopFly - Configuración del TLD2-L

Esta página describe el contexto público de configuración para usar el rastreador OBDII TopFly TLD2-L con Plaspy. Está enfocada en los ajustes de servidor prácticos, los pasos de instalación habituales y los comandos SMS publicados para configurar el equipo y que reporte a Plaspy. El material aquí está pensado para ayudar a técnicos y administradores de flota a preparar el dispositivo para su integración en Plaspy, mientras se confía en las herramientas del fabricante para cambios a nivel de dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos de configuración en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TLD2-L es un rastreador OBDII plug and play con conectividad celular y soporte de comandos SMS, por lo que esta página combina los requisitos del servidor Plaspy con el flujo de configuración por SMS publicado por el fabricante para ofrecer una referencia práctica.

## Resumen de la configuración

El proceso de configuración deja al TLD2-L listo para enviar posiciones GNSS, telemetría y datos de eventos a Plaspy de forma fiable. Para el TLD2-L esto suele implicar establecer el APN correcto para la SIM instalada, configurar el endpoint y puerto del servidor Plaspy, y ajustar los intervalos de reporte y la zona horaria para que los datos aparezcan correctamente en la plataforma.

- Configure el APN y credenciales del rastreador para que pueda usar datos móviles para telemetría.
- Apunte el dispositivo al endpoint y puerto del servidor Plaspy: d.plaspy.com / 54.85.159.138 en el puerto 8888.
- Establezca intervalos de reporte y temporizadores acordes a sus necesidades de monitoreo y al plan de datos.
- Verifique la conectividad de red y que el rastreador se registre en Plaspy tras aplicar los ajustes.
- Confirme que eventos del dispositivo como encendido, alertas del acelerómetro y telemetría de sensores BLE sean visibles en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: se admite UDP o TCP; el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy realiza detección automática de protocolo para identificar el formato del rastreador.

## Requisitos típicos antes de la configuración

- Acceso físico al puerto OBDII del vehículo para la instalación y para confirmar que el dispositivo recibe alimentación.
- Una tarjeta SIM funcional insertada en el rastreador con un plan de datos y la información APN correcta.
- Capacidad para enviar comandos SMS al rastreador si se usa provisión por SMS, o acceso a la herramienta de configuración oficial del fabricante si está disponible.
- Conocimiento de la contraseña SMS del dispositivo; la contraseña por defecto publicada en los ejemplos abajo es 0000.
- Documentación del fabricante o recursos de soporte a mano para instrucciones específicas de firmware y pasos de recuperación.
- Una cuenta de prueba o acceso a Plaspy para validar que el dispositivo informa tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TLD2-L envía sus posiciones y telemetría al endpoint y puerto compartido de Plaspy, de modo que el dispositivo aparezca en la plataforma. Plaspy ingiere posiciones GNSS, eventos del acelerómetro y otra telemetría para visualización, alertas y análisis.

- El rastreador reporta actualizaciones de posición GNSS y telemetría programada a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- La telemetría se transmite por el transporte elegido (UDP o TCP) y Plaspy detecta automáticamente los detalles del protocolo al recibir los datos.
- Eventos del acelerómetro, alertas de encendido y desconexión, y telemetría de sensores BLE son reenviados a Plaspy para mapas y notificaciones.
- El buffering a bordo permite al dispositivo almacenar puntos y subirlos cuando la conectividad se restablezca, de modo que Plaspy mantenga continuidad de datos.
- Una configuración exitosa hace que el dispositivo aparezca en la lista de dispositivos de Plaspy y comience a enviar actualizaciones en vivo según el temporizador configurado.

## Flujo de configuración común

1. Acceda al método oficial de configuración TopFly para el TLD2-L, como la provisión por SMS o la herramienta de configuración del proveedor documentada por TopFly.
2. Ingrese el endpoint del servidor Plaspy como d.plaspy.com o 54.85.159.138 según la herramienta del dispositivo que esté utilizando.
3. Configure el puerto del servidor en 8888.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según la preferencia de red o la guía del instalador.
5. Establezca el APN y las credenciales del dispositivo para que el rastreador pueda usar datos GPRS o LTE.
6. Aplique o guarde la configuración y, si es necesario, reinicie el equipo para asegurar que los ajustes entren en vigor.
7. Valide que el dispositivo reporte a Plaspy comprobando la presencia del equipo y las actualizaciones de ubicación recientes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El TLD2-L puede configurarse usando comandos SMS. Los siguientes comandos de ejemplo son la sintaxis pública SMS publicada para la configuración inicial. Los ejemplos utilizan la contraseña SMS por defecto 0000.

- Establecer la zona horaria a UTC 0
```text
GMT,0000,0#
```

- Establecer el APN. Reemplace {{apn}}, {{apnu}} y {{apnp}} con el nombre del APN de su operador, el usuario y la contraseña según sea necesario
```text
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
(Explicación: {{apn}} es el nombre del APN proporcionado por el operador móvil. {{apnu}} y {{apnp}} son campos opcionales de usuario y contraseña del APN. Mantenga las llaves como marcadores y sustituya con los valores de su operador.)

- Configurar el servidor GPRS a la IP y puerto de Plaspy
```text
IP,0000,54.85.159.138 8888#
```
(Explicación: este comando apunta el dispositivo a Plaspy usando la IP del servidor publicada y el puerto requerido 8888.)

- Ajustar el temporizador de reporte a 60 segundos
```text
TIMER,0000,60:60:0:0#
```
(Explicación: este ejemplo establece intervalos de reporte programados. Confirme el formato del temporizador y su comportamiento con la documentación de TopFly para su versión de firmware.)

Nota: Los comandos anteriores reflejan ejemplos públicos de provisión por SMS. Si su herramienta de proveedor requiere una sintaxis diferente o soporta usar nombres de dominio en lugar de direcciones IP, siga las instrucciones oficiales de TopFly.

## Notas de configuración

- La provisión por SMS está soportada en los comandos públicos mostrados; siga la documentación de TopFly para requisitos de entrega de SMS y el tiempo entre comandos.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos, los parámetros soportados o el comportamiento. Verifique siempre los comandos según la versión de firmware del dispositivo en uso.
- Elija UDP o TCP según las políticas de red y las necesidades de confiabilidad. El rastreador puede ofrecer ambas opciones; Plaspy aceptará datos por cualquiera de los dos transportes en el puerto 8888.
- Los comandos SMS de ejemplo usan la contraseña pública por defecto 0000. Cambie las contraseñas del dispositivo donde sea posible y gestione credenciales según su política de seguridad.
- Las herramientas del fabricante o un portal de configuración pueden ofrecer un flujo más simple para despliegues a gran escala; consulte los recursos de TopFly para opciones de provisión masiva.

## Por qué usar Plaspy con esta configuración

Configurar el TopFly TLD2-L para reportar a Plaspy ofrece a flotas y operadores una vía sencilla hacia visibilidad continua de ubicación y telemetría. Dado que el TLD2-L soporta reportes frecuentes, eventos de acelerómetro, sensores BLE y buffering local, se integra bien con Plaspy para ofrecer mapas en vivo, análisis de comportamiento y alertas operacionales que ayudan a mejorar rutas, seguridad y protección de activos.

Para saber más sobre Plaspy y cómo maneja la integración de dispositivos, visite https://www.plaspy.com. Para los métodos de configuración más recientes, detalles de firmware y orientación del fabricante para el TLD2-L, verifique la información en el sitio oficial de TopFly https://www.topflytech.com/ ya que las instrucciones del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
