---
slug: /concox/eg02/configuration
id: eg02-configuration
sidebar_label: Configuration
title: Concox - EG02 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Concox EG02 con Plaspy, incluye ajustes de servidor, comandos SMS y flujo de instalación
keywords:
  - configuración Concox EG02
  - instalación Concox EG02
  - configuración servidor Concox EG02
  - configuración Plaspy Concox EG02
  - configuración rastreador EG02
  - ajustes servidor EG02
  - instalación rastreador Concox
  - configuración dispositivo Plaspy
  - configuración SMS rastreador GPS
  - configuración rastreador scooter eléctrico
---

# Concox - EG02 Configuración

Esta página describe el contexto público de configuración para usar el rastreador Concox EG02 con Plaspy. Explica los valores compartidos del servidor Plaspy a los que debe apuntar el EG02, ofrece un ejemplo de flujo de configuración por SMS (cuando esté disponible) y detalla los pasos comunes para verificar que el dispositivo informe correctamente a la plataforma. La guía está dirigida a usuarios técnicos que preparan el EG02 para su integración con Plaspy.

Plaspy utiliza valores de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos específicos del fabricante pueden variar según la revisión de firmware, la versión de hardware, el tipo de instalación y las herramientas del proveedor. El EG02 admite métodos de configuración por SMS y GPRS mostrados a continuación; confirme el comportamiento de su unidad consultando la documentación del fabricante y las notas de firmware.

## Resumen de la configuración

Configurar el EG02 para Plaspy prepara el rastreador para establecer una sesión GPRS con Plaspy y enviar actualizaciones de posición y estado a un endpoint de servidor compartido. El objetivo principal es asegurarse de que el dispositivo tenga los valores correctos de APN y servidor, una conexión de datos funcional y un intervalo de reporte adecuado a sus necesidades de monitoreo.

- Configure el APN y los parámetros GPRS para que el EG02 pueda usar datos móviles y alcanzar Plaspy.
- Establezca el endpoint y el puerto del servidor Plaspy para que el dispositivo reporte a la infraestructura centralizada.
- Seleccione el transporte (UDP o TCP) en el dispositivo si el firmware lo requiere.
- Configure los intervalos de reporte y habilite GPRS para controlar la frecuencia de envío de actualizaciones de ubicación.
- Verifique la conectividad y use el comando de verificación del fabricante para confirmar que los parámetros están activos.

## Valores del servidor Plaspy

Use los siguientes valores del servidor Plaspy al configurar los ajustes del dispositivo EG02:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Todos los dispositivos usados con Plaspy utilizan el mismo puerto y Plaspy detectará el protocolo automáticamente, por lo que solo necesita apuntar el rastreador a la dirección y el puerto correctos.

## Requisitos típicos antes de la configuración

- Una unidad EG02 con batería cargada e instalada, con acceso a la interfaz SMS o a la herramienta de configuración del fabricante.
- Una tarjeta SIM con datos habilitados y el APN correcto del operador móvil.
- Capacidad para enviar comandos SMS desde un número telefónico que el dispositivo acepte, o acceso al software de configuración del fabricante si lo prefiere.
- Nota del APN, nombre de usuario APN y contraseña APN del operador de la SIM si son necesarios.
- Familiaridad básica con el envío de comandos SMS de configuración o con el uso de la aplicación de configuración del proveedor.
- Opcional: un área de prueba con buena cobertura celular para validar la conectividad GPRS.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el EG02 utiliza la conexión GPRS del dispositivo para enviar datos de ubicación y eventos a Plaspy. El rastreador se apunta al endpoint y puerto compartidos de Plaspy para que los reportes entrantes se encaminen hacia la plataforma para su procesamiento y visualización.

- El dispositivo abre una conexión GPRS usando el APN configurado para obtener acceso a datos móviles.
- El EG02 envía reportes de ubicación y eventos a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy soporta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta, por lo que la selección de protocolo suele ser una opción solo en el lado del dispositivo.
- Una vez conectado, las actualizaciones de posición y las alertas del dispositivo serán visibles en Plaspy para monitoreo y reproducción histórica.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante, como comandos SMS o el software de configuración proporcionado por Concox.
2. Ingrese la dirección del servidor Plaspy, ya sea el dominio d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto del servidor en 8888.
4. Elija UDP o TCP como opción de transporte si el EG02 requiere selección de transporte.
5. Configure el APN y las credenciales APN necesarias para su tarjeta SIM.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo solicita.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado en la plataforma o usando el comando de verificación del EG02.

## Comandos de configuración de ejemplo

El EG02 puede configurarse enviando los siguientes mensajes SMS al dispositivo. Mantenga el orden cuando sea aplicable. Los comandos y los marcadores de posición se muestran exactamente como se usan en la configuración por SMS.

1. Reinicio opcional a valores de fábrica (usar solo si necesita devolver el dispositivo a los valores predeterminados)
```text
FACTORY#
```

2. Ajustar la zona horaria a UTC+0
```text
GMT,E,0#
```

3. Establecer el APN del operador
- APN básico solamente:
```text
APN,{{apn}}#
```
- APN con nombre de usuario y contraseña (si el operador lo requiere):
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Nota: Mantenga los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por el APN, el usuario APN y la contraseña APN de su operador respectivamente.

4. Establecer el servidor GPRS al dominio de Plaspy (recomendado)
```text
SERVER,1,d.plaspy.com,8888,0#
```
O establecer el servidor GPRS usando la IP del servidor Plaspy
```text
SERVER,0,54.85.159.138,8888,0#
```

5. Establecer el intervalo de actualización cada 60 segundos (dos variantes comunes)
```text
TIMER,60#
```
o
```text
TIMER,60,60#
```

6. Habilitar modo GPRS
```text
GPRSON,1#
```

7. Consultar parámetros y ajustes GPRS actuales
```text
GPRSSET#
```

Cómo usar estos comandos
- Envíe cada SMS desde un número autorizado al EG02 en el orden en que desea aplicar los ajustes.
- Reemplace los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} por los valores reales del operador.
- Use el comando de verificación GPRSSET# para confirmar el servidor, el APN y los ajustes del temporizador después de aplicar los cambios.

## Observaciones sobre la configuración

- La sintaxis exacta de los SMS y los parámetros disponibles pueden variar según la versión de firmware o la revisión de hardware; pruebe siempre en una unidad antes de desplegar en masa.
- Si el dispositivo ofrece tanto UDP como TCP, pruebe UDP primero por menor sobrecarga, pero seleccione TCP si su entorno requiere una conexión persistente.
- Use la forma de dominio d.plaspy.com siempre que sea posible para permitir el enrutamiento basado en DNS; la IP 54.85.159.138 está disponible como alternativa.
- El EG02 admite la configuración por SMS como se muestra arriba; algunos instaladores prefieren la herramienta de configuración de Concox o los canales de soporte del proveedor para despliegues masivos o remotos.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita diferentes valores de puerto para distintos dispositivos.

## Por qué usar Plaspy con esta configuración

Usar el EG02 con Plaspy ofrece una forma sencilla de consolidar los datos de rastreo de flotas de scooters en una única plataforma para visibilidad operativa, alertas e historial de ubicaciones. Apuntar el EG02 al endpoint compartido de Plaspy permite que el dispositivo envie telemetría y eventos a la plataforma, donde se pueden monitorear, analizar y utilizar en flujos de trabajo de gestión de flotas o protección contra robos.

Para obtener más información sobre Plaspy y las configuraciones de dispositivos compatibles visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y orientación del fabricante consulte el sitio oficial de Concox https://www.iconcox.com/ para verificar los métodos de configuración actuales y cualquier cambio en el comportamiento del firmware.
