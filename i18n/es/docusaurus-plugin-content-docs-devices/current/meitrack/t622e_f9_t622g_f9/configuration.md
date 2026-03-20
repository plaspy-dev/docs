---
slug: /meitrack/t622e_f9_t622g_f9/configuration
id: t622e_f9_t622g_f9-configuration
sidebar_label: Configuration
title: Meitrack - T622E-F9/T622G-F9 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Meitrack T622E-F9/T622G-F9 y conectarlos a Plaspy con servidor compartido y comandos SMS
keywords:
  - Configuración Meitrack T622E-F9
  - Configuración Meitrack T622G-F9
  - Configurar T622E-F9
  - Configurar T622G-F9
  - Configuración Meitrack Plaspy
  - Configuración rastreador GPS
  - Rastreador de vehículo Plaspy
  - Configuración servidor T622E-F9
  - Configuración SMS T622G-F9
  - Configuración seguimiento de flotas
---

# Meitrack - Configuración T622E-F9/T622G-F9

Esta página describe el contexto público de configuración para utilizar los rastreadores Meitrack T622E-F9 y T622G-F9 con Plaspy. Se centra en los ajustes compartidos del servidor de Plaspy, pasos prácticos que puede aplicar mediante las herramientas del fabricante o comandos SMS, y el flujo típico de verificación para confirmar que el dispositivo reporta correctamente a Plaspy. Cuando procede, incluimos ejemplos de comandos SMS públicos del fabricante para su conveniencia.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El T622E-F9 / T622G-F9 admite configuración por SMS y configuración de servidor GPRS en los ejemplos públicos que se muestran a continuación; confirme siempre los comandos y el comportamiento exacto con la documentación de Meitrack o con la herramienta del instalador para su versión de firmware.

## Resumen de la configuración

Este proceso prepara un Meitrack T622E-F9 o T622G-F9 para enviar posición y telemetría a Plaspy usando el endpoint y puerto compartidos de la plataforma. El objetivo es garantizar reportes GPRS confiables (o las vías de conectividad soportadas por el dispositivo), ajustes de transporte correctos y los intervalos de reporte apropiados para que el dispositivo sea visible y útil en los paneles y alertas de Plaspy.

- Configure el dispositivo para enviar datos al endpoint y puerto compartidos de Plaspy.
- Establezca el APN del equipo y, si aplica, el usuario y la contraseña del APN para que las subidas GPRS funcionen.
- Seleccione el modo de transporte (UDP o TCP) si el dispositivo lo requiere y guarde la configuración.
- Defina el intervalo de reporte y los eventos a reportar según sus necesidades de monitoreo.
- Verifique que el dispositivo se registre y comience a enviar mensajes a Plaspy para que la ubicación y la telemetría aparezcan en la plataforma.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: soporta UDP o TCP (el dispositivo puede permitir seleccionar uno)
- Plaspy detecta automáticamente el protocolo del rastreador para dispositivos compatibles
- Nota: todos los dispositivos en Plaspy usan el mismo puerto para la conectividad con la plataforma

## Requisitos típicos antes de la configuración

- Un Meitrack T622E-F9 o T622G-F9 instalado y con alimentación, con acceso a su interfaz de SMS o de configuración.
- Una SIM activa con plan de datos funcional y los datos de APN correctos para GPRS, si va a usar carga por celular.
- Acceso a la contraseña del dispositivo o a la contraseña por defecto (los ejemplos a continuación usan la contraseña por defecto 0000).
- Un teléfono capaz de enviar SMS o la herramienta de configuración del fabricante para enviar los comandos de configuración.
- Una cuenta en Plaspy o haber aceptado el dispositivo en su instancia de Plaspy para validar los reportes.
- Comprensión básica de si UDP o TCP es preferible en su entorno de despliegue.

## Cómo se conecta este rastreador a Plaspy

El dispositivo Meitrack se configura para enviar paquetes de posición y eventos/telemetría al endpoint y puerto compartidos de Plaspy. Plaspy recibe esos paquetes, detecta automáticamente el protocolo del dispositivo y pone la ubicación y la telemetría a disposición en la plataforma para visibilidad en tiempo real e informes históricos.

- El rastreador envía datos GPRS a d.plaspy.com (o a la IP del servidor) en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según el firmware del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador y mapea los mensajes entrantes para su procesamiento.
- Eventos, cargas periódicas de posición y la telemetría configurada se reenvían a Plaspy para paneles y alertas.
- Una configuración y conectividad exitosas se traducen en estado de dispositivo y actualizaciones de posición visibles en Plaspy.

## Flujo común de configuración

1. Acceda al método oficial de configuración de Meitrack para su dispositivo y firmware, ya sea vía comandos SMS, la herramienta de configuración de Meitrack o la utilidad de instalador proporcionada por su proveedor.
2. Ingrese el servidor de Plaspy como d.plaspy.com o use la IP del servidor 54.85.159.138 si el dispositivo requiere una entrada en forma de IP.
3. Configure el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Elija UDP o TCP como transporte si el dispositivo lo solicita.
5. Configure los ajustes de APN (y opcionalmente el usuario y la contraseña del APN) para que el dispositivo pueda establecer sesiones de datos GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el equipo requieren reinicio para aplicar los cambios.
7. Valide que el dispositivo esté reportando a Plaspy revisando el estado del dispositivo y la primer posición/telemetría en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El T622E-F9 / T622G-F9 admite configuración por SMS. Los siguientes comandos públicos de ejemplo se ofrecen en el orden recomendado por el fabricante. Los comandos de muestra usan la contraseña por defecto del dispositivo 0000. Mantenga los marcadores de posición exactamente como se muestran y reemplácelos por los valores de APN de su operador cuando corresponda.

- Reset de fábrica inicial opcional (úselo sólo si necesita devolver el dispositivo a valores de fábrica):
```text
0000,F11
```

- Establecer el servidor GPRS a Plaspy. Reemplace [apn] con el APN de su SIM. Si su APN requiere autenticación, incluya [apnu] y [apnp] como usuario y contraseña del APN respectivamente.
```text
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```

- Establecer la zona horaria a UTC+0:
```text
0000,B36,0
```

- Establecer intervalo de actualización de posición a 1 minuto:
```text
0000,A12,6,0
```

- Configurar reporte de eventos (ejemplo que define un perfil de evento específico):
```text
0000,C03,0
```

Notas sobre los marcadores de posición:
- [apn] — la cadena APN de su operador móvil necesaria para datos GPRS.
- [apnu] — usuario APN opcional si su operador lo requiere.
- [apnp] — contraseña APN opcional si su operador lo requiere.
Reemplace los marcadores de posición con los valores correctos para su SIM; omita los campos de usuario y contraseña del APN si su red no los solicita.

## Notas adicionales de configuración

- Las diferencias de firmware pueden modificar la sintaxis exacta de los comandos o los parámetros disponibles; siempre haga coincidir los comandos con la versión de firmware del dispositivo.
- La configuración por SMS se muestra porque el fabricante publica estos comandos; algunas implementaciones pueden preferir la herramienta de configuración del proveedor o la provisión OTA.
- Elija TCP para entrega más fiable si su red y firmware lo soportan; UDP puede reducir la sobrecarga pero depende del manejo a nivel de aplicación para paquetes perdidos.
- Mantenga seguras las credenciales del APN y las contraseñas de los dispositivos; cambie las contraseñas por defecto tras la provisión inicial cuando sea posible.
- Después de configurar, supervise las primeras cargas a Plaspy para confirmar que la telemetría y el reporte de eventos se comportan como espera.

## Por qué usar Plaspy con esta configuración

Utilizar el Meitrack T622E-F9 o T622G-F9 con Plaspy ofrece un camino sencillo hacia la visibilidad centralizada de vehículos y la gestión de telemetría. Con el dispositivo configurado para enviar datos al endpoint y puerto compartidos de Plaspy, las flotas obtienen acceso a seguimiento de ubicación en tiempo real, notificaciones de eventos y la posibilidad de integrar la telemetría de los vehículos en paneles y flujos operativos.

Para saber más sobre Plaspy y cómo gestiona las integraciones de dispositivos, visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, la sintaxis de comandos, notas de firmware y compatibilidad de accesorios, verifique los detalles en el sitio del fabricante en https://www.meitrack.com/ ya que estos elementos pueden cambiar con el tiempo.
