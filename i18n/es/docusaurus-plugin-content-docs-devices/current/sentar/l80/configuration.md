---
slug: /sentar/l80/configuration
id: l80-configuration
sidebar_label: Configuration
title: Sentar - L80 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Sentar L80 con los ajustes de servidor de Plaspy
keywords:
  - Configuración Sentar L80
  - Configuración Sentar L80 instalación
  - Configuración servidor Sentar L80
  - Sentar L80 Plaspy
  - Configuración rastreador L80
  - Configuración GPS Sentar
  - Configuración rastreador Plaspy
  - Ajustes servidor rastreador GPS
  - rastreo infantil L80
  - configuración plataforma rastreo
---

# Sentar - L80: Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Sentar L80 con Plaspy. Presenta los ajustes de servidor prácticos y ejemplos de comandos de configuración disponibles públicamente para que pueda preparar el dispositivo y que éste comunique ubicaciones y telemetría básica con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos de configuración en el lado del fabricante para el L80 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que use esta guía junto con la documentación oficial de Sentar y cualquier instrucción específica del dispositivo que tenga.

## Resumen de la configuración

Configurar el Sentar L80 para Plaspy consiste principalmente en apuntar el reloj al servidor de Plaspy, asegurarse de que el dispositivo tenga conectividad móvil y ajustes de APN válidos, y verificar que las actualizaciones periódicas de ubicación lleguen a la plataforma. El L80 admite comandos de configuración vía SMS, método que muchos instaladores y técnicos utilizan para la puesta en marcha.

- Configure el L80 para que reporte a los ajustes del servidor de Plaspy y la plataforma reciba mensajes de ubicación y del dispositivo.
- Configure o verifique los parámetros APN y GPRS para que el dispositivo pueda establecer conexión de datos.
- Elija transporte UDP o TCP en el dispositivo si es necesario y establezca el puerto compartido de Plaspy.
- Valide la zona horaria del dispositivo y el intervalo de reporte para que los datos de ubicación se muestren correctamente en Plaspy.
- Utilice los comandos SMS proporcionados por Sentar para restablecer de fábrica, definir marcadores de APN y confirmar los ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto 8888

## Requisitos típicos antes de la configuración

- El dispositivo debe estar encendido y capaz de recibir SMS si va a usar el método de configuración por SMS que se muestra más abajo.
- Tarjeta SIM activa con plan de datos y APN correcto del operador móvil.
- Acceso a la contraseña por defecto del dispositivo si se requiere para la configuración; los comandos de ejemplo a continuación usan la contraseña por defecto 123456 según guía pública de Sentar.
- Conocimiento de los valores correctos de APN para la SIM, incluidos nombre APN, usuario APN y contraseña APN.
- Entender si el firmware del dispositivo requiere TCP o UDP para el reporte GPRS.
- Acceso a las instrucciones oficiales de configuración de Sentar o a herramientas de instalador cuando estén disponibles.

## Cómo se conecta este rastreador a Plaspy

El L80 envía ubicación y mensajes de dispositivo al endpoint compartido de Plaspy para que la plataforma pueda mostrar el dispositivo y activar eventos. Durante la configuración, el rastreador se apunta a la dirección del servidor de Plaspy y se configura para subir datos en un intervalo elegido, de modo que las actualizaciones de ubicación lleguen a la plataforma.

- El rastreador se configura para enviar datos GPRS al endpoint y puerto del servidor Plaspy.
- El transporte de datos puede ser UDP o TCP según la configuración del dispositivo y el firmware.
- Plaspy inspecciona las conexiones entrantes y detecta automáticamente el protocolo del rastreador.
- Los intervalos regulares de subida garantizan que el dispositivo sea visible y rastreable en Plaspy.
- Los informes de eventos y los mensajes de estado del dispositivo son visibles en Plaspy una vez que el dispositivo se conecta correctamente.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Sentar para el L80, normalmente comandos SMS o la herramienta de instalador del fabricante.
2. Ingrese la dirección del servidor Plaspy en la configuración del dispositivo: d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo solicita selección de transporte y guarde ese ajuste.
5. Configure el APN del dispositivo, usuario y contraseña APN como marcadores para que los datos GPRS puedan conectarse.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware requiere reinicio.
7. Verifique que el dispositivo reporte a Plaspy y aparezca en la plataforma con las actualizaciones de ubicación esperadas.

## Comandos de configuración de ejemplo

El Sentar L80 admite comandos de configuración vía SMS en el formato público de comandos de Sentar. La configuración de ejemplo a continuación usa la contraseña por defecto del dispositivo 123456 según la guía pública del fabricante. Conserve la contraseña y los marcadores tal cual al enviar los comandos SMS.

- Restablecer a valores de fábrica (paso inicial opcional)
```text
pw,123456,factory#
```

- Establecer la zona horaria a UTC 0
```text
pw,123456,lz,0,0#
```

- Consultar MCC y MNC / obtener información IMSI
```text
pw,123456,imsi#
```

- Configurar el APN del operador donde {{apn}} es el nombre del APN, {{apnu}} es el usuario APN, {{apnp}} es la contraseña APN, y xxxyy representa MCC y MNC combinados
```text
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto mostrados en esta guía
```text
pw,123456.ip,54.85.159.138,8888#
```

Nota: Si el firmware de su dispositivo admite la configuración por nombre de host en lugar de IP, puede reemplazar la IP por el dominio d.plaspy.com al enviar el comando de servidor, pero verifique primero que su dispositivo acepte nombres de host.

- Establecer el intervalo de subida a 300 segundos (comando de ejemplo publicado)
```text
pw123456,upload,300#
```

- Verificar los ajustes en el dispositivo
```text
pw,123456,ts#
```

Explicación de los marcadores:
- {{apn}} es el nombre del APN del operador móvil.
- {{apnu}} es el usuario APN si lo exige el operador.
- {{apnp}} es la contraseña APN si la exige el operador.
- xxxyy en el comando de APN representa el MCC y MNC del operador y debe reemplazarse por los códigos numéricos correctos cuando sea necesario.

## Notas de configuración

- Los comandos públicos del Sentar L80 se envían comúnmente por SMS; asegúrese de que el dispositivo pueda recibir SMS antes de continuar.
- Las revisiones de firmware y las variantes regionales pueden cambiar la sintaxis de los comandos o el orden de los parámetros; confirme siempre con la documentación del dispositivo.
- Elija UDP o TCP según la guía del firmware del dispositivo y las condiciones de red; ambos transportes son compatibles con Plaspy.
- Tenga presente la contraseña por defecto del dispositivo al usar los comandos de ejemplo; cambie las contraseñas mediante los pasos compatibles del fabricante cuando corresponda.
- Verifique los valores de APN con el operador móvil para garantizar la conectividad GPRS antes de intentar conectar con Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Sentar L80 con Plaspy permite a organizaciones y padres centralizar la visibilidad de ubicaciones y los reportes de estado del dispositivo en una sola plataforma. Al aceptar Plaspy una dirección y puerto de servidor consistentes entre dispositivos y detectar automáticamente el protocolo del rastreador, el proceso de integración se concentra en la configuración correcta de APN y transporte para que los dispositivos aparezcan de forma fiable en la plataforma.

Para saber más sobre Plaspy y los flujos de trabajo soportados visite https://www.plaspy.com. Los métodos de configuración específicos del fabricante, el comportamiento del firmware y los detalles del dispositivo pueden cambiar con el tiempo; verifique las últimas instrucciones y notas de firmware de Sentar en http://www.sentarsmart.com/ antes de aplicar configuraciones en producción.
