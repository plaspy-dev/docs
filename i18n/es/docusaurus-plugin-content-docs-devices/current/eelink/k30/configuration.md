---
slug: /eelink/k30/configuration
id: k30-configuration
sidebar_label: Configuration
title: EElink - K30 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador EElink K30 a Plaspy con ajustes de servidor y comandos SMS
keywords:
  - EElink K30
  - configuración EElink K30
  - configuración inicial EElink K30
  - EElink K30 Plaspy
  - rastreador GPS K30
  - configuración K30
  - configuración servidor Plaspy
  - configuración rastreador Plaspy
  - configuración rastreador GPS
  - configuración seguimiento de vehículo
---

# EElink - Configuración del K30

Esta página describe la configuración pública para usar el rastreador GPS portátil EElink K30 con la plataforma Plaspy. Resume los pasos prácticos y los valores públicos que normalmente necesitará para apuntar un dispositivo K30 a Plaspy para el reporte de ubicación y la ingesta básica de telemetría.

Plaspy utiliza un endpoint y puerto compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el dispositivo envía datos a la plataforma. Los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor; por ello esta guía se centra en los valores públicos y los comandos SMS comúnmente usados para el K30 cuando están disponibles.

## Resumen de la configuración

El objetivo de la configuración es preparar el K30 para comunicarse de forma confiable con Plaspy, validar la conectividad y asegurar que el dispositivo sea visible en la plataforma. Para el K30 esto normalmente implica aplicar parámetros de red, ajustes de servidor y un intervalo de reporte mediante el método de configuración soportado por el fabricante, por ejemplo SMS.

- Configure el APN del operador para que el dispositivo use datos móviles para reportes y gestión remota.
- Apunte el dispositivo a Plaspy introduciendo el endpoint y el puerto compartidos.
- Seleccione UDP o TCP en el dispositivo si es necesario y guarde la configuración.
- Establezca un intervalo de reporte adecuado al caso de uso y al consumo de energía.
- Verifique que el dispositivo reporte a Plaspy y use el comando PARAM para confirmar la configuración actual.

## Ajustes del servidor Plaspy

Use estos ajustes públicos del servidor Plaspy al configurar un K30 para la plataforma. Plaspy requiere el mismo puerto para todos los dispositivos compatibles y detecta el protocolo del rastreador automáticamente.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

## Requisitos típicos antes de comenzar

- Un dispositivo K30 con batería y capaz de recibir SMS y conectarse a la red móvil
- Una tarjeta SIM válida con plan de datos activo y la información del APN del operador
- Acceso al método oficial de configuración de EElink o a los comandos SMS provistos por el distribuidor
- Conocimiento de los valores APN de su operador (tenga listos los marcadores {{apn}}, {{apnu}} y {{apnp}})
- Acceso al dispositivo para reiniciarlo o cortar la alimentación si es necesario aplicar cambios

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el K30 envía paquetes de posición y eventos a Plaspy apuntando al endpoint y puerto compartidos. Plaspy ingiere esos mensajes, aplica detección de protocolo y mapea los eventos a paneles, alertas e informes históricos.

- El rastreador envía posiciones y telemetría al endpoint d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las condiciones de la red
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes en consecuencia
- Eventos como activaciones de SOS, estado de movimiento e informes de batería se encaminan a Plaspy para alertas y registro
- Los administradores deben verificar la visibilidad en Plaspy una vez que el dispositivo comience a reportar al puerto compartido

## Flujo común de configuración

1. Acceda al método oficial de configuración de EElink para el K30 mediante la app del proveedor, la plataforma o los comandos SMS.
2. Introduzca el endpoint de Plaspy como dominio d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto en 8888 ya que Plaspy utiliza el mismo puerto para todos los dispositivos.
4. Seleccione UDP o TCP si el dispositivo requiere una elección explícita de transporte.
5. Configure el APN del operador usando el comando APN o la herramienta de configuración del dispositivo; incluya usuario y contraseña del APN si son necesarios.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere para que los cambios tengan efecto.
7. Valide que el dispositivo reporte a Plaspy y confirme que la telemetría aparece en la plataforma.

## Ejemplos de comandos de configuración

El K30 soporta configuración por SMS. Los siguientes comandos SMS públicos son la secuencia documentada para una configuración básica. Mantenga los marcadores y adáptelos a los valores de su operador.

- Reinicio opcional a configuración de fábrica (usar sólo si necesita borrar la configuración existente):
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0 (modifique si necesita otro comando de zona horaria):
```text
GMT,E,0#
```

- Configurar el APN del operador. Reemplace {{apn}} con el APN de su operador. Si el operador requiere usuario y contraseña, incluya {{apnu}} y {{apnp}}:
```text
APN,{{apn}}{{,{{apnu}},{{apnp}}}}#
```
Explicación: {{apn}} es el nombre del APN. {{apnu}} y {{apnp}} son marcadores opcionales para usuario y contraseña del APN en caso de que el operador los solicite.

- Configurar el servidor GPRS para apuntar a Plaspy usando el dominio (la opción de transporte UDP/TCP se determina por el flag de transporte):
```text
SERVER,1,d.plaspy.com,8888#
```
o configurar usando la IP de Plaspy:
```text
SERVER,0,54.85.159.138,8888#
```
Nota: Estos comandos apuntan al puerto 8888 que es el puerto compartido de Plaspy para todos los dispositivos.

- Establecer un intervalo de reporte periódico (ejemplo: actualizaciones cada 60 segundos):
```text
TIMER,60#
```

- Consultar los parámetros actuales en el dispositivo:
```text
PARAM#
```

Use los comandos en el orden indicado cuando el orden sea importante. Reemplace los marcadores por los valores correctos del operador antes de enviar los SMS al dispositivo.

## Notas de configuración

- Las variantes de firmware y regionales pueden cambiar los comandos disponibles o la sintaxis; siempre verifique con la documentación del dispositivo para su versión de firmware.
- El K30 soporta configuración por SMS además de métodos por plataforma o app; elija el método que mejor se adapte a su despliegue y requisitos de seguridad.
- Al elegir entre TCP y UDP, considere la confiabilidad de la red y el comportamiento del operador; ambos transportes son compatibles en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza detección automática de protocolo, por lo que el endpoint y el puerto son los ajustes principales requeridos.
- Si utiliza el comando de restablecimiento de fábrica, téngalo como paso opcional y ejecútelo sólo cuando sea necesario, ya que borrará la configuración existente.

## Por qué usar Plaspy con esta configuración

Usar el K30 con Plaspy ofrece una forma sencilla de centralizar la telemetría de wearables, eventos SOS y actualizaciones de posición en una única plataforma para monitoreo y alertas. Apuntar el dispositivo al servidor y puerto compartidos de Plaspy minimiza la configuración por dispositivo y aprovecha la detección automática de protocolos de Plaspy para agilizar la incorporación.

Para más información sobre Plaspy y cómo gestiona las conexiones y la telemetría de dispositivos visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y detalles regionales verifique la documentación oficial de EElink en https://www.eelink.com.cn/ ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.
