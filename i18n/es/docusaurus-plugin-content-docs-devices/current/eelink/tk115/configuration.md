---
slug: /eelink/tk115/configuration
id: tk115-configuration
sidebar_label: Configuration
title: EElink - TK115 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador EElink TK115 y los ajustes de servidor necesarios para Plaspy y comandos SMS básicos
keywords:
  - configuración EElink TK115
  - configuración TK115 Plaspy
  - configuración rastreador EElink
  - configuración servidor TK115
  - configuración GPS EElink
  - integración rastreador Plaspy
  - rastreo vehicular TK115
  - configuración plataforma GPS TK115
  - configuración SMS TK115
  - gestión de flotas Plaspy
---

# EElink - Configuración TK115

Esta página presenta la guía pública para configurar el rastreador EElink TK115 con Plaspy. Incluye los ajustes de servidor compartidos que Plaspy espera y explica los pasos prácticos para apuntar un TK115 a Plaspy, de modo que el equipo entregue ubicación, estado y eventos de alarma a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que use la documentación del fabricante junto con estas instrucciones públicas cuando sea necesario.

## Resumen de la configuración

Este proceso prepara al TK115 para comunicarse de forma fiable con Plaspy estableciendo los puntos de servidor, el transporte, el intervalo de reporte y el APN cuando sea necesario. El objetivo es que el dispositivo pueda conectarse por GPRS y enviar telemetría a Plaspy para que el rastreador aparezca en la plataforma y reporte eventos.

- Apunte el dispositivo al endpoint de Plaspy para que la telemetría y las alarmas sean entregadas.
- Configure el APN y los parámetros GPRS para que el TK115 use datos móviles.
- Ajuste el intervalo de reporte y los temporizadores para controlar la frecuencia de actualización y el consumo de batería.
- Verifique la configuración con un comando de verificación del fabricante o mediante la respuesta del dispositivo.
- Valide que el dispositivo aparezca y reporte correctamente dentro de Plaspy.

## Ajustes de servidor de Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: se admite UDP o TCP; el dispositivo puede configurarse con UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y asigna el manejo de protocolo correspondiente
- Nota: todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos habituales antes de la configuración

- Una tarjeta SIM funcional con un plan de datos activo y el APN correcto del operador móvil
- Acceso físico al TK115 y al método de configuración que soporte su dispositivo (comandos SMS, herramienta del distribuidor o gestión remota de parámetros)
- Fuente de alimentación estable durante la configuración y conocimiento del cableado de alimentación del equipo y del estado de la batería de respaldo
- Información básica como APN, usuario APN y contraseña APN para la SIM; puede usar marcadores de posición en los comandos
- Una forma de recibir o enviar SMS al equipo si utiliza configuración basada en SMS
- Acceso a las credenciales de su cuenta Plaspy y al procedimiento de registro de dispositivos si su cuenta lo requiere

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TK115 envía mensajes periódicos de telemetría y eventos al endpoint y puerto compartidos de Plaspy para que la plataforma muestre ubicación en tiempo real, estado y alarmas a los operadores. Plaspy ingiere los mensajes entrantes y los asocia con la cuenta y el dispositivo correctos.

- El rastreador reporta fijaciones de ubicación e información de posicionamiento asistido al endpoint del servidor Plaspy
- Señales de estado como ACC, eventos de alimentación y notificaciones de alarma se entregan a Plaspy
- El dispositivo utiliza GPRS para establecer conexión con el dominio o la IP del servidor Plaspy en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy acepta ambos y detecta automáticamente el protocolo del rastreador
- Una vez activo el reporte, la visibilidad del dispositivo, las alertas y la telemetría estarán disponibles en Plaspy

## Flujo de configuración habitual

1. Acceda al método oficial de configuración EElink para el TK115, por ejemplo comandos SMS o la herramienta del fabricante documentada por EElink.
2. Ingrese el servidor Plaspy como dominio d.plaspy.com o como la IP 54.85.159.138 en el ajuste de servidor.
3. Establezca el puerto del servidor en 8888; Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija el transporte UDP o TCP en el dispositivo si su configuración del TK115 requiere selección de transporte.
5. Configure el APN, el usuario APN y la contraseña APN según la SIM usando el método del fabricante.
6. Aplique o guarde la configuración del dispositivo y reinicie el rastreador si el dispositivo o el firmware lo requieren.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado en la plataforma y utilizando cualquier comando de verificación proporcionado por EElink.

## Ejemplo de comandos de configuración

El TK115 puede configurarse mediante comandos SMS. Los siguientes comandos públicos se ofrecen como ejemplo en orden y deben enviarse por SMS al equipo. Preserve los marcadores de posición tal como se muestran.

- Reinicio de fábrica opcional (usar solo cuando sea necesario)
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
```text
APN,[apn]# 
```
Si su APN requiere usuario y contraseña, incluya estos marcadores de posición:
```text
APN,[apn],[apnu],[apnp]#
```
Nota: [apn] es la cadena APN de su operador móvil. [apnu] y [apnp] son usuarios y contraseña APN opcionales.

- Configurar el servidor GPRS usando el dominio de Plaspy (ejemplo con dominio)
```text
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS usando la IP de Plaspy (ejemplo con IP)
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización de ubicación a 60 segundos
```text
TIMER,60#
```

- Consultar parámetros actuales del dispositivo
```text
PARAM#
```

Siga los comandos en el orden requerido por su despliegue. El comando de reinicio de fábrica es opcional y debe usarse solo cuando necesite restaurar los valores por defecto antes de reconfigurar.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o las funciones disponibles; confirme siempre la compatibilidad de comandos con el firmware del TK115.
- La configuración por SMS es comúnmente compatible con los dispositivos TK115; si existe una herramienta de software o un servicio de gestión remota de EElink, prefiera el método recomendado por su proveedor para despliegues masivos.
- Elija UDP o TCP según la preferencia del instalador o las consideraciones de red; Plaspy acepta ambos en el puerto 8888 y detecta automáticamente el protocolo.
- Use el dominio d.plaspy.com o la IP 54.85.159.138 al configurar el servidor. Plaspy acepta ambas formas; el puerto debe ser 8888.
- Mantenga las credenciales del APN correctas; los marcadores de posición como [apn], [apnu] y [apnp] deben reemplazarse por los valores de su operador al enviar los comandos.

## Por qué usar Plaspy con esta configuración

Configurar el EElink TK115 para reportar a Plaspy ofrece a operadores de flota y equipos de seguridad visibilidad centralizada y consistente sobre la ubicación de vehículos, eventos de alarma y señales de estado como ACC. Usar los ajustes de servidor compartidos de Plaspy simplifica el aprovisionamiento de dispositivos en flotas, ya que todos los equipos usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador.

Para conocer más sobre Plaspy visite https://www.plaspy.com. Para instrucciones específicas por dispositivo, avisos de firmware y detalles del fabricante verifique la información actual en el sitio de EElink https://www.eelink.com.cn/. Las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo, así que confirme los pasos exactos para su dispositivo y revisión de firmware antes de un despliegue masivo.
