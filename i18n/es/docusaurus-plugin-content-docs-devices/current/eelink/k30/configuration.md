---
slug: /eelink/k30/configuration
id: k30-configuration
sidebar_label: Configuration
title: EElink - K30 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador GPS wearable EElink K30 con ajustes de servidor Plaspy y comandos SMS para integración
keywords:
  - configuración EElink K30
  - instalación EElink K30
  - EElink K30 Plaspy
  - configuración rastreador GPS K30
  - configuración servidor K30
  - comandos SMS K30
  - configuración rastreador GPS wearable
  - configuración rastreador Plaspy
  - ajustes servidor Plaspy
  - integración plataforma rastreadores GPS
---

# EElink - K30 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GPS wearable EElink K30 con Plaspy. Se centra en los ajustes prácticos del servidor, los comandos de configuración por SMS que proporciona el fabricante y los pasos necesarios para preparar el dispositivo para que envíe ubicaciones y eventos a Plaspy, permitiendo su visualización en mapas, alertas e historial.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto para todos los dispositivos soportados, detectando automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor, por lo que siga esta guía junto con la documentación oficial de EElink y cualquier instrucción específica del dispositivo.

## Resumen de configuración

Configurar el K30 para Plaspy prepara el rastreador para enviar su ubicación y telemetría a la plataforma de forma confiable y repetible. El proceso típico establece parámetros de red, señala el endpoint de Plaspy y verifica que el dispositivo informe correctamente.

- Configure el APN y los parámetros de red para que el dispositivo pueda enviar datos a través de la red celular y recibir comandos SMS para su configuración.
- Apunte el dispositivo al endpoint y puerto del servidor Plaspy para que la plataforma reciba las ubicaciones y eventos.
- Seleccione el método de transporte si es necesario y confirme que el rastreador use el tipo de conexión soportado.
- Ajuste los intervalos de reporte y temporizadores para equilibrar frecuencia de actualización y duración de batería según el caso de uso.
- Verifique los parámetros del dispositivo y confirme que el K30 aparezca en Plaspy y esté enviando la telemetría esperada.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos típicos antes de la configuración

- Un dispositivo K30 con batería cargada y acceso al número de teléfono para configuración por SMS o a la herramienta de configuración del fabricante.
- Una tarjeta SIM activa instalada en el K30 con datos habilitados y permiso para enviar y recibir SMS para la configuración remota.
- Credenciales APN del operador móvil para configurar el acceso GPRS del rastreador.
- Acceso a las instrucciones o software de configuración de EElink para realizar la configuración inicial, o un teléfono con capacidad SMS para enviar los comandos.
- Una cuenta en Plaspy y la posibilidad de registrar o identificar el dispositivo en la plataforma una vez que comience a reportar.

## Cómo se conecta este rastreador a Plaspy

El K30 se configura para enviar ubicaciones y eventos al endpoint y puerto compartidos de Plaspy. Una vez aplicados los ajustes de red y servidor, el rastreador envía actualizaciones periódicas de ubicación y notificaciones de eventos para que Plaspy las muestre y active alertas.

- El rastreador envía posición y telemetría a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la selección del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Las actualizaciones en intervalos regulares y eventos de movimiento o SOS permiten a Plaspy mostrar ubicación y estado en tiempo real en mapas y paneles.
- El estado de batería, activaciones de SOS y otros eventos del K30 se vuelven visibles en Plaspy para monitoreo y alertas.
- Una configuración exitosa asegura que el K30 aparezca en Plaspy y aporte datos a los informes históricos y en tiempo real.

## Flujo común de configuración

1. Acceda al método de configuración oficial de EElink o al software correspondiente, o prepare un teléfono con capacidad SMS para enviar comandos de configuración.  
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 tal como lo proporciona Plaspy.  
3. Establezca el puerto en 8888, tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos.  
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte. Plaspy admite ambos y detectará automáticamente el protocolo activo.  
5. Ingrese el APN y las credenciales del operador necesarias para la conectividad GPRS o de datos.  
6. Aplique o guarde la configuración y reinicie el dispositivo si éste requiere reboot para que los ajustes surtan efecto.  
7. Valide que el dispositivo informe a Plaspy y aparezca en la plataforma con la telemetría y las ubicaciones esperadas.

## Ejemplos de comandos de configuración

El EElink K30 soporta configuración mediante SMS. Los siguientes comandos son públicos del fabricante y pueden enviarse como mensajes SMS al número del dispositivo. Mantenga los marcadores de posición tal como aparecen y reemplácelos por los valores específicos del operador cuando corresponda.

- Reset de fábrica opcional (usar solo si es necesario):
```text
FACTORY#
```

- Ajustar la zona horaria a UTC 0:
```text
GMT,E,0#
```

- Configurar el APN del operador. Reemplace [apn], [apnu] y [apnp] con el APN, usuario y contraseña del operador según sea necesario. Los campos de usuario y contraseña son opcionales y pueden omitirse si el operador no los requiere:
```text
APN,[apn],[apnu],[apnp]#
```

- Configurar el servidor GPRS para usar el dominio de Plaspy en el puerto 8888:
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternativamente, configurar el servidor GPRS usando la IP del servidor Plaspy en el puerto 8888:
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo periódico de envío de localización a 60 segundos:
```text
TIMER,60#
```

- Verificar parámetros actuales en el dispositivo:
```text
PARAM#
```

Notas sobre marcadores de posición y uso:
- [apn] es la cadena APN del operador móvil necesaria para datos. Reemplácela por el APN de su operador.
- [apnu] y [apnp] son el usuario y la contraseña del APN si el operador los requiere. Omítalos si no aplican.
- Los comandos SERVER muestran tanto la opción con dominio como la opción con IP directa. Cualquiera de las dos es aceptable; ambas apuntan a Plaspy en el puerto 8888.
- Envíe los comandos por SMS al número del dispositivo según las instrucciones de EElink. Use el reset de fábrica únicamente cuando sea necesario.

## Notas de configuración

- Revisiones de firmware y hardware pueden cambiar el formato de comandos o las opciones disponibles. Confirme que los comandos coinciden con el firmware del dispositivo antes de aplicarlos en producción.
- Elija UDP o TCP según la política del sitio o las condiciones de red; Plaspy acepta ambos y detectará automáticamente el protocolo que use el dispositivo.
- La configuración por SMS es un método estándar del fabricante para el K30, pero también puede utilizar las herramientas oficiales de EElink o interfaces de plataforma cuando estén disponibles.
- Verifique siempre con el proveedor de la SIM los datos de APN y la cuenta para asegurar que el dispositivo pueda establecer una sesión de datos GPRS.
- Después de aplicar los ajustes de servidor y red, utilice el comando PARAM# o la plataforma Plaspy para validar que el dispositivo está reportando correctamente.

## Por qué usar Plaspy con esta configuración

Configurar el EElink K30 para reportar a Plaspy ofrece una vía sencilla hacia la visibilidad centralizada de personal y activos. Las organizaciones pueden recibir ubicaciones en tiempo real, eventos SOS y telemetría básica de actividad en los mapas y paneles de Plaspy, lo que facilita la respuesta rápida, el cumplimiento y la supervisión operativa.

Para conocer más sobre Plaspy y las funcionalidades de la plataforma visite https://www.plaspy.com. Para instrucciones de configuración específicas del dispositivo, notas de firmware y detalles del fabricante verifique la información en el sitio de EElink https://www.eelink.com.cn/. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que confirme los detalles actuales antes de despliegues a gran escala.
