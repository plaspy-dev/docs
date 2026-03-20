---
slug: /coban/bn_501/configuration
id: bn_501-configuration
sidebar_label: Configuration
title: Coban - BN-501 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el Coban BN-501 con Plaspy usando comandos SMS y ajustes de servidor públicos
keywords:
  - configuración Coban BN-501
  - instalación Coban BN-501
  - configuración BN-501 Plaspy
  - configuración rastreador Coban
  - configuración GPS wearable
  - comandos SMS BN-501
  - configuración rastreador Plaspy
  - configuración servidor BN-501
  - instalación rastreador GPS Coban
  - integración BN-501
---

# Coban - BN-501 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Coban BN-501 con la plataforma Plaspy. Reúne los ajustes prácticos de servidor y los comandos públicos por SMS que se usan para preparar el dispositivo y que pueda reportar ubicaciones y alertas a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de preparación por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que las instrucciones aquí deben tomarse como un punto de partida práctico y verificar el comportamiento del equipo con la documentación oficial de Coban cuando sea necesario.

## Resumen de la configuración

El BN-501 puede configurarse para que envíe posiciones, telemetría y eventos de alarma a Plaspy usando los ajustes de servidor compartidos y opciones de transporte estándar. Los pasos públicos de configuración preparan el dispositivo para el reporte por red celular, validan la conectividad y habilitan la visibilidad en la plataforma Plaspy.

- Apuntar el dispositivo al endpoint del servidor de Plaspy para que la telemetría llegue a la plataforma.
- Configurar el APN y los parámetros GPRS para que el rastreador pueda usar la conexión de datos móviles.
- Elegir el transporte (UDP o TCP) y garantizar que el dispositivo reporte al puerto que usa Plaspy.
- Validar los reportes del equipo usando el comando de verificación y comprobar el primer uplink en el panel de Plaspy.
- Opcionalmente, aplicar la configuración por SMS o Bluetooth según las herramientas de campo y el soporte del firmware.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos de servidor al configurar el BN-501 para que reporte a Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

Estos valores son el endpoint público de Plaspy para el reporte de dispositivos y deben ingresarse en el rastreador durante la configuración.

## Requisitos previos típicos

- Un BN-501 con batería cargada y alimentación disponible para la configuración inicial y las pruebas.
- Una tarjeta SIM activa que soporte la red celular elegida por el dispositivo y el APN correcto para datos (NB‑IoT o LTE Cat M cuando aplique).
- Acceso al método de configuración oficial de Coban que prefiera para el dispositivo, como provisión por SMS o la herramienta Bluetooth/app del fabricante.
- Conocimiento del APN de la SIM, usuario APN y contraseña APN de su operador móvil.
- Entender que los ajustes pueden variar según el firmware; tenga a mano el manual del dispositivo o las notas del proveedor.

## Cómo se conecta este rastreador a Plaspy

El BN-501 se configura para enviar localizaciones, alarmas y telemetría al endpoint y puerto compartidos de Plaspy. Una vez que el rastreador apunte al endpoint de Plaspy y tenga las credenciales APN correctas, comenzará a reportar según su modo de funcionamiento configurado.

- Los datos de posición y telemetría se envían desde el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El dispositivo puede usar transporte UDP o TCP; elija el que requiera su firmware y entorno.
- Alarmas como SOS, movimiento o batería baja se transmiten como eventos a Plaspy para alertas y monitoreo.
- Plaspy detecta el protocolo del rastreador de forma automática, por lo que el mismo servidor y puerto funcionan para los dispositivos soportados.
- Use el comando de verificación del dispositivo para confirmar que el rastreador está conectado y visible en Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Coban que prefiera (provisión por SMS o Bluetooth/app) según lo provea el fabricante.
2. Configure la dirección del servidor ingresando d.plaspy.com o la IP del servidor Plaspy 54.85.159.138.
3. Ajuste el puerto del servidor a 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte.
5. Configure el APN y, si aplica, el usuario y la contraseña del APN para que el dispositivo use datos móviles.
6. Aplique o guarde la configuración y reinicie el equipo si el firmware requiere reboot para aplicar parámetros GPRS.
7. Valide que el dispositivo reporte a Plaspy usando el comando de verificación y verificando el uplink inicial en la plataforma.

## Ejemplos de comandos de configuración

El BN-501 soporta provisión por SMS. A continuación se muestran ejemplos públicos de comandos SMS proporcionados por el fabricante. La contraseña por defecto mostrada aquí es 123456; si la ha cambiado, use su contraseña de dispositivo. Reemplace los marcadores {{apn}}, {{apnu}} y {{apnp}} por los valores de su operador.

1. Reinicio opcional a valores de fábrica (usar solo si necesita restaurar por defecto)
```
begin123456
```

2. Ajustar la zona horaria a UTC+0
```
time zone123456 0
```

3. Establecer el APN del operador
```
apn123456 {{apn}}
```
- {{apn}} = cadena APN de su operador móvil

4. Establecer usuario y contraseña del APN
```
up123456 {{apnu}} {{apnp}}
```
- {{apnu}} = usuario APN (dejar en blanco si no aplica)
- {{apnp}} = contraseña APN (dejar en blanco si no aplica)

5. Establecer el servidor GPRS a la IP y puerto de Plaspy
```
adminip123456 54.85.159.138 8888
```
- Esto dirige al dispositivo para que reporte a Plaspy. Alternativamente puede usar d.plaspy.com cuando el dispositivo soporte nombres de dominio.

6. Establecer intervalo de actualización de ubicación (ejemplo, formato específico del dispositivo)
```
fix060s060s***n123456
```
- Ejemplo proporcionado por el fabricante para fijar reportes periódicos; consulte el manual del dispositivo para la sintaxis exacta del tiempo.

7. Cambiar a modo GPRS y seleccionar UDP o TCP (se muestran dos formatos)
```
gprs123456,1,1
```
o
```
gprs123456
```
- Use el formato que acepte su firmware para habilitar GPRS y seleccionar el transporte. Si su firmware requiere selección explícita, elija UDP o TCP según corresponda.

8. Comprobar la configuración actual del equipo
```
check123456
```

9. Habilitar reporte de sensor digital mejorado o sensor de combustible (ejemplo número de protocolo)
```
protocol123456 18
```
- Este comando habilita modos de reporte adicionales según lo soporte el firmware del dispositivo.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar el formato exacto de los comandos SMS y los parámetros disponibles; siempre verifique con el manual del dispositivo para su versión de firmware.
- El dispositivo admite provisión por SMS y configuración por Bluetooth; use el método que mejor se adapte al acceso en campo y a las consideraciones de seguridad.
- La selección TCP versus UDP puede afectar el comportamiento de entrega y retransmisión; elija según las condiciones de red y las capacidades del firmware del equipo.
- Reemplace los tokens marcadores como {{apn}}, {{apnu}} y {{apnp}} con las credenciales de su operador. Si algún campo no es necesario, déjelo en blanco según la sintaxis del fabricante.
- Considere cambiar la contraseña por defecto 123456 después de la configuración inicial para mejorar la seguridad, si el dispositivo lo permite.

## Por qué usar Plaspy con esta configuración

Configurar el BN-501 para reportar a Plaspy ofrece una forma sencilla de centralizar datos de ubicación, alarmas y telemetría de dispositivos wearables. Para casos de uso de seguridad personal, rastreo de activos o monitoreo ligero, la discreta forma del BN-501 y su conectividad multinetwork, combinadas con la detección automática de protocolo y los ajustes de servidor unificados de Plaspy, simplifican el despliegue y la visibilidad.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Verifique los métodos de configuración específicos del BN-501, el comportamiento del firmware y los detalles del fabricante en el sitio oficial de Coban https://www.coban.net/ ya que las especificaciones y procedimientos del fabricante pueden cambiar con el tiempo.
