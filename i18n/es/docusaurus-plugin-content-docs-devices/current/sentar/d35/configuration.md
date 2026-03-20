---
slug: /sentar/d35/configuration
id: d35-configuration
sidebar_label: Configuration
title: Sentar - D35 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el reloj rastreador Sentar D35 con Plaspy, con ajustes de servidor, comandos SMS y flujo de trabajo
keywords:
  - Configuración Sentar D35
  - Instalación Sentar D35
  - Sentar D35 Plaspy
  - Configuración servidor Sentar D35
  - Configurar rastreador GPS D35
  - Configuración GPS reloj infantil
  - Configuración rastreador Plaspy
  - Comandos SMS rastreador GPS
  - Configurar APN D35
  - Configuración dispositivo a servidor
---

# Sentar - Configuración D35

Esta página documenta el contexto público de configuración para usar el reloj rastreador Sentar D35 con la plataforma Plaspy. Resume los ajustes de servidor compartidos por Plaspy y explica los pasos prácticos para apuntar un D35 al servicio de Plaspy. El D35 es un rastreador GPS infantil con forma de reloj basado en Android 4G y admite comandos de configuración por SMS que se usan comúnmente para establecer APN y parámetros de servidor.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. La configuración del modelo D35 incluye comandos SMS y una contraseña predeterminada del dispositivo 123456 que son útiles para la configuración inicial, el APN y para apuntar el equipo al endpoint del servidor de Plaspy.

## Resumen de configuración

El objetivo de este proceso es dejar el D35 preparado para comunicar confiablemente posiciones y estados a Plaspy, de modo que los cuidadores puedan ver ubicaciones en tiempo real, recibir alertas y monitorear la salud del dispositivo. Para el D35 esto típicamente implica usar el método de configuración soportado por el fabricante (comandos SMS o herramientas de proveedor) para establecer valores de APN, la dirección del servidor GPRS, el tipo de transporte y el intervalo de carga.

- Configure el APN y las credenciales del D35 para que pueda registrarse en la red móvil y enviar datos por GPRS.
- Apunte el dispositivo al dominio o IP del servidor Plaspy para que la telemetría llegue a su cuenta.
- Elija el transporte (UDP o TCP) y configure el puerto estándar de Plaspy para garantizar compatibilidad.
- Defina un intervalo de subida apropiado para que el rastreador informe con la frecuencia deseada.
- Verifique la configuración usando los comandos de verificación del D35 y confirme que el dispositivo aparece en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para conexiones entrantes

Estos son los valores públicos del endpoint de Plaspy que debe usar al configurar el D35 para que el dispositivo entregue datos de ubicación y eventos a Plaspy.

## Requisitos típicos antes de configurar

- Un dispositivo D35 encendido con batería cargada y capacidad para recibir SMS si va a utilizar configuración por SMS.
- Una SIM nano activa con voz y datos habilitados y la información APN correcta del operador.
- Acceso al método de configuración del fabricante, como comandos SMS o la herramienta de configuración del proveedor.
- Conocimiento de la contraseña o PIN del dispositivo para la configuración. La documentación pública indica una contraseña predeterminada 123456.
- Registro del identificador del dispositivo utilizado por Plaspy si su proceso de incorporación lo requiere.
- Acceso básico a Plaspy para verificar que el dispositivo aparece y envía telemetría después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el D35 envía actualizaciones de ubicación y estado desde el reloj al endpoint y puerto compartidos de Plaspy. Plaspy ingiere estas actualizaciones y las presenta en mapas, paneles e canales de notificación para que los cuidadores puedan monitorear movimiento, recibir alertas SOS y ver el estado del dispositivo.

- El rastreador se configura para reportar al endpoint d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El transporte puede elegirse entre UDP o TCP según las opciones del dispositivo; Plaspy acepta ambos y detectará automáticamente el protocolo del rastreador.
- Los intervalos regulares de subida entregan actualizaciones de posición para que Plaspy muestre ubicaciones casi en tiempo real en el mapa.
- Los eventos SOS y de estado generados en el dispositivo se envían a Plaspy para alertas y flujos de trabajo de incidentes.
- Plaspy registra la conectividad del dispositivo e puede indicar cuando un equipo está offline o reporta condiciones de red deficientes.

## Flujo de configuración común

1. Acceda al método oficial de configuración del fabricante o al software para el D35, por ejemplo el canal de configuración por SMS o la herramienta del proveedor suministrada por Sentar.
2. Si lo desea y está soportado, realice un restablecimiento de fábrica como paso inicial para borrar configuraciones anteriores; de lo contrario proceda solo a actualizar los ajustes de servidor y APN.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en los ajustes GPRS del dispositivo.
4. Configure el puerto en 8888. Plaspy usa el mismo puerto para todos los dispositivos soportados, por lo que use 8888 de forma consistente.
5. Elija UDP o TCP como transporte si el dispositivo requiere selección de transporte. Plaspy acepta cualquiera y detectará el protocolo automáticamente.
6. Configure el APN del operador y el nombre de usuario o contraseña APN según lo requiera la operadora de la SIM.
7. Aplique o guarde la configuración y reinicie el dispositivo si necesita reinicio para aplicar los cambios.
8. Valide que el dispositivo reporte a Plaspy revisando el estado en Plaspy y usando el comando de verificación del dispositivo para ver los ajustes actuales.

## Comandos de configuración de ejemplo

El D35 soporta comandos de configuración por SMS. Los siguientes comandos públicos se proporcionan en la configuración del modelo del fabricante y se presentan aquí en el mismo orden. El ejemplo usa la contraseña predeterminada del dispositivo 123456 según se muestra. Mantenga los marcadores como [apn], [apnu] y [apnp] y reemplácelos por los valores APN de su operador.

- Restablecimiento de fábrica inicial opcional
```text
pw,123456,factory#
```

- Ajustar la zona horaria a UTC 0
```text
pw,123456,lz,0,0#
```

- Consultar MCC y MNC o información IMSI
```text
pw,123456,imsi#
```

- Establecer el APN del operador donde [apn] es el APN, [apnu] es el usuario APN, [apnp] es la contraseña APN y xxxyy representa MCC y MNC si es necesario
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto
```text
pw,123456.ip,54.85.159.138,8888#
```

- Establecer el intervalo de subida a 300 segundos
```text
pw123456,upload,300#
```

- Comando de verificación para revisar los ajustes actuales
```text
pw,123456,ts#
```

Notas sobre los comandos anteriores:
- Los comandos se presentan tal como aparecen en la configuración del modelo público. Algunas variantes de firmware o regionales pueden usar separadores o sintaxis ligeramente distintos. Confirme la sintaxis exacta en el manual del dispositivo.
- Marcadores: [apn] = APN del operador, [apnu] = usuario APN, [apnp] = contraseña APN.
- El comando de restablecimiento de fábrica es opcional y debe usarse solo cuando necesite restaurar valores de fábrica.

## Notas de configuración

- La configuración por SMS es un método común para este dispositivo, pero algunos proveedores ofrecen herramientas para PC o móviles; use el método oficial que coincida con su despliegue y firmware.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o las funciones disponibles; verifique siempre la documentación actual de Sentar para su versión de dispositivo.
- Elija TCP o UDP según las necesidades de la instalación; Plaspy soporta ambos y detectará automáticamente el protocolo del rastreador en el puerto 8888.
- Después de la configuración inicial cambie la contraseña predeterminada del dispositivo cuando sea posible y documente la nueva contraseña para los administradores.
- Use el comando de verificación para confirmar APN, IP o dominio del servidor y el intervalo de subida antes de finalizar la instalación.

## Por qué usar Plaspy con esta configuración

Usar el Sentar D35 con Plaspy ofrece a cuidadores y organizaciones una forma sencilla de recibir ubicación en tiempo real, alertas SOS y estado del dispositivo desde un rastreador wearable orientado a niños. Las capacidades de posicionamiento multimodal del D35 y su conectividad 4G, combinadas con los ajustes de servidor compartidos de Plaspy, simplifican la incorporación y reducen la cantidad de valores de servidor específicos por dispositivo que debe gestionar.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration details, firmware behavior, and manufacturer instructions on the Sentar website http://www.sentarsmart.com/ as manufacturers may update commands and setup methods over time.
