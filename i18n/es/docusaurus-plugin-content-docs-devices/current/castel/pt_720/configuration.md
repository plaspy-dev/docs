---
slug: /castel/pt_720/configuration
id: pt_720-configuration
sidebar_label: Configuration
title: Castel - PT-720 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar el reloj GPS Castel PT-720 para que reporte a Plaspy usando la configuración pública del servidor
keywords:
  - Castel PT-720
  - Configuración PT-720
  - Configuración rastreador Castel GPS
  - Configurar PT-720 en Plaspy
  - Configuración rastreador Plaspy
  - Configuración dispositivo Castel
  - Configuración reloj GPS
  - Configuración servidor PT-720
  - Configuración plataforma de seguimiento
  - Configuración rastreador infantil
---

# Castel - PT-720 Configuración

Esta página describe el contexto de configuración pública para usar el reloj rastreador GPS infantil Castel PT-720 con la plataforma Plaspy. Reúne los ajustes de servidor prácticos y los comandos por SMS que están disponibles públicamente para configurar el dispositivo y que éste informe su ubicación y estado a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El PT-720 admite configuración por SMS como se muestra en los comandos públicos a continuación y utiliza una nano SIM para posicionamiento celular y alertas.

## Resumen de la configuración

El proceso de configuración prepara el PT-720 para comunicarse con Plaspy estableciendo el APN/GPRS del dispositivo y el endpoint del servidor y luego validando la conectividad. Para este modelo, el fabricante proporciona comandos por SMS para establecer el APN y la IP y puerto del servidor de Plaspy. Use la clave secreta derivada del ID del dispositivo al enviar instrucciones por SMS.

- Configure el APN y las credenciales GPRS del dispositivo para que el rastreador se conecte por datos móviles
- Apunte el dispositivo al endpoint del servidor de Plaspy para que la plataforma reciba la telemetría
- Seleccione UDP o TCP en el puerto 8888 si el dispositivo requiere elegir el transporte
- Verifique los ajustes y la conectividad para que el dispositivo aparezca en Plaspy y reporte posición y alertas

## Ajustes del servidor Plaspy

Utilice estos ajustes públicos de servidor de Plaspy al configurar el PT-720:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles)
- Transporte soportado: UDP o TCP (configure el transporte si el dispositivo requiere selección)
- Plaspy detecta automáticamente el protocolo del rastreador para las conexiones entrantes

## Requisitos habituales antes de la configuración

- Un dispositivo PT-720 con batería cargada y una nano SIM con datos habilitados
- Capacidad para enviar y recibir mensajes SMS al número de teléfono del dispositivo para la configuración basada en SMS
- El ID del dispositivo para poder derivar la clave secreta SMS (el fabricante usa los últimos 6 caracteres ASCII del ID del dispositivo como clave por defecto)
- Configuración APN conocida del operador de la SIM (APN, usuario, contraseña) para ajustar GPRS
- Acceso al método de configuración oficial de Castel o a la guía de usuario del PT-720 en caso de que las herramientas del fabricante o el firmware varíen
- Una cuenta o acceso a la plataforma Plaspy para validar que el dispositivo aparece y reporta después de la configuración

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el PT-720 envía ubicación y eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe esos reportes entrantes y los asocia a un registro de dispositivo para que la ubicación y las alertas estén disponibles en la plataforma.

- El dispositivo se configura para enviar datos GPRS al endpoint de Plaspy en d.plaspy.com o 54.85.159.138
- Todos los dispositivos envían al puerto 8888 en Plaspy, lo que simplifica la configuración del lado del servidor
- Plaspy acepta transporte UDP o TCP y detectará automáticamente el protocolo del rastreador
- Alertas de eventos como SOS o movimiento se reenvían a Plaspy cuando el dispositivo envía telemetría
- Tras una configuración exitosa, el dispositivo debería aparecer y actualizar su posición en la plataforma Plaspy

## Flujo de trabajo de configuración común

1. Acceda al método de configuración oficial del Castel PT-720 o a la documentación para confirmar el formato de los comandos SMS según su firmware.
2. Identifique el ID del dispositivo y derive la clave secreta SMS por defecto (los últimos 6 caracteres ASCII del ID del dispositivo).
3. Ingrese el servidor de Plaspy como dominio d.plaspy.com o como la IP 54.85.159.138 en la configuración del dispositivo.
4. Establezca el puerto en 8888, que Plaspy utiliza para todos los dispositivos compatibles.
5. Seleccione UDP o TCP si el rastreador requiere una selección explícita de transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy y que la ubicación y las alertas sean visibles en la plataforma.

## Ejemplos de comandos de configuración

El PT-720 admite configuración por SMS usando una clave secreta. Los comandos públicos del fabricante muestran cómo establecer el APN y la IP/puerto del servidor y cómo verificar la configuración GPRS. La clave secreta por defecto para las instrucciones SMS son los últimos 6 caracteres ASCII del ID del dispositivo.

- Establecer APN y servidor Plaspy IP y puerto
- Verificar ajustes GPRS actuales

Use estas plantillas de SMS, reemplazando los marcadores según se indica a continuación:

- APN y comando para fijar servidor
```text
*[SecretKey]#set gprs#[apn],[apnu],[apnp],54.85.159.138,8888*
```

- Verificar ajustes GPRS actuales
```text
*[SecretKey]#get gprs#*
```

Explicación de los marcadores:
- [SecretKey] — la contraseña SMS del dispositivo, por defecto los últimos 6 caracteres ASCII del ID del dispositivo
- [apn] — la cadena APN del operador celular
- [apnu] — el nombre de usuario del APN si el operador lo requiere
- [apnp] — la contraseña del APN si el operador lo requiere

Envíe estos SMS al número telefónico del dispositivo PT-720. Si su dispositivo o firmware requiere seleccionar explícitamente UDP o TCP, utilice el método del fabricante para establecer el transporte además del servidor y el puerto.

## Notas de configuración

- El PT-720 admite configuración por SMS según los comandos públicos mostrados; mantenga la clave secreta SMS segura y cámbiela si el firmware lo permite.
- Los valores de APN varían según el operador y el mercado; confirme el APN exacto, usuario y contraseña con su proveedor de SIM antes de enviar comandos.
- Algunas versiones de firmware o revisiones de hardware pueden cambiar la sintaxis o el comportamiento de los comandos SMS; siempre consulte la documentación oficial de Castel para su lote de dispositivos.
- Elija UDP o TCP según las opciones del dispositivo y la fiabilidad de la red; Plaspy acepta ambos y detectará automáticamente el protocolo del rastreador en nuestro puerto entrante.
- Recuerde que Plaspy usa el puerto 8888 para todos los dispositivos compatibles con el fin de simplificar la configuración del servidor.

## Por qué usar Plaspy con esta configuración

Usar el PT-720 con Plaspy ofrece a organizaciones y familias una plataforma consistente para visibilidad y monitoreo operativo. Al apuntar el PT-720 al endpoint y puerto compartidos de Plaspy, los dispositivos pueden reportar ubicación y alertas en la misma plataforma donde están disponibles funciones de seguimiento, geocercas e historial de rutas.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique la información más reciente sobre la configuración del PT-720 en el sitio de Castel en http://www.castelecom.com/ antes de desplegar los dispositivos.
