---
slug: /aoya/t6/configuration
id: t6-configuration
sidebar_label: Configuration
title: AoYa - T6 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del rastreador AoYa T6 para integrarlo con Plaspy usando servidor compartido y detección automática de protocolo
keywords:
  - configuración AoYa T6
  - instalación AoYa T6
  - AoYa T6 Plaspy
  - configuración rastreador AoYa
  - configuración servidor T6
  - integración AoYa T6
  - seguimiento vehicular AoYa T6
  - configuración rastreador Plaspy
  - guía AoYa T6
  - configuración plataforma T6 GPS
---

# AoYa - T6 Configuración

Esta página describe el contexto público de configuración para usar el rastreador GPS AoYa T6 con Plaspy. Resume los pasos e información de servidor que normalmente se requieren para apuntar el T6 a Plaspy y permitir que el dispositivo informe su ubicación y estado a la plataforma. El contenido se enfoca en conceptos de configuración de acceso público y en los parámetros compartidos del servidor de Plaspy que deberá aplicar al equipo.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El AoYa T6 puede configurarse mediante métodos del fabricante, como comandos SMS o software de configuración; esta página resume el flujo público sin reproducir la sintaxis específica de comandos del dispositivo.

## Resumen de la configuración

Configurar el AoYa T6 para Plaspy prepara el rastreador para comunicarse con un único endpoint de Plaspy, de modo que la plataforma pueda recibir datos de ubicación y eventos. El proceso normalmente garantiza conectividad de red, el APN correcto para datos móviles y que el dispositivo esté apuntando al endpoint y puerto de Plaspy para que la plataforma interprete automáticamente el protocolo del equipo.

- Apunte el rastreador al endpoint del servidor de Plaspy para que los datos lleguen a su cuenta.
- Asegúrese de que el dispositivo tenga conectividad móvil adecuada y el APN correcto para alcanzar el servidor.
- Seleccione el protocolo de transporte si el dispositivo requiere elegir entre UDP o TCP.
- Guarde y aplique la configuración, luego valide que el T6 aparezca en su cuenta de Plaspy y envíe actualizaciones.
- Utilice los métodos de configuración del fabricante según sea necesario para establecer el APN del operador y los parámetros del servidor.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y confía en la detección automática de protocolos para interpretar las conexiones entrantes.

## Requisitos típicos antes de la configuración

- Dispositivo alimentado e instalado según las indicaciones del fabricante para que pueda transmitir datos de forma fiable.
- Capacidad de datos móviles activa en el dispositivo con una SIM compatible y el APN correcto para su operador.
- Acceso al método de configuración oficial del fabricante o al software, para poder establecer parámetros de servidor y red.
- Una cuenta en Plaspy y el identificador del dispositivo disponible para confirmar que el rastreador aparece en la plataforma.
- Buena cobertura celular y un entorno de pruebas donde el dispositivo pueda adquirir GPS o LBS según esté disponible.

## Cómo se conecta este rastreador a Plaspy

El AoYa T6 se configura para enviar actualizaciones de posición y estado directamente al endpoint y puerto del servidor de Plaspy. Una vez establecidos la dirección del servidor y el transporte, Plaspy recibe el tráfico del dispositivo e identifica automáticamente el protocolo para que el rastreador sea visible en la vista de flota.

- El rastreador envía datos al endpoint de Plaspy en d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Puede elegir transporte UDP o TCP en el dispositivo si la configuración requiere una selección explícita.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de la conexión entrante.
- Tras la comunicación exitosa, el dispositivo queda visible en Plaspy y envía eventos y posiciones a la plataforma.
- Las herramientas de monitoreo y diagnóstico en Plaspy permiten verificar que el equipo esté reportando correctamente.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante o al software indicado por AoYa.
2. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 para que coincida con la configuración del servidor de Plaspy.
4. Seleccione UDP o TCP en el dispositivo si se requiere una elección explícita del transporte.
5. Guarde o aplique la configuración y asegúrese de que cualquier ajuste de APN o red esté activo.
6. Valide que el dispositivo reporte a Plaspy y aparezca en el panel de su cuenta.

Si el dispositivo soporta configuración por SMS o herramientas del fabricante, esos métodos pueden usarse para establecer el APN y los valores del servidor Plaspy en lugar de una interfaz de software. Consulte la documentación oficial de AoYa para el canal de configuración específico que admite su unidad T6.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar los menús disponibles y los formatos de comando; confirme los pasos según el firmware instalado.
- Las prácticas de instalación varían por mercado y distribuidor; algunas unidades pueden venir preconfiguradas por un revendedor.
- TCP y UDP están soportados; utilice el transporte que mejor se adecue a su despliegue y a las restricciones de la red intermedia.
- La configuración por SMS es una opción común para dispositivos AoYa, pero la sintaxis de comandos y las contraseñas por defecto son específicas del fabricante y deben manejarse según las instrucciones oficiales.
- Siempre confirme los detalles de APN y conectividad con su operador móvil y la documentación del fabricante antes del despliegue.

## ¿Por qué usar Plaspy con esta configuración?

Usar Plaspy con el AoYa T6 ofrece una forma directa de centralizar los datos de ubicación y eventos de este rastreador compacto en una única plataforma de gestión de flotas. Apuntar el dispositivo a Plaspy usando el endpoint y el puerto compartidos permite que la plataforma detecte automáticamente el protocolo del equipo y comience a recibir la telemetría sin requerir credenciales de servidor específicas para cada modelo.

Para obtener más información sobre Plaspy y cómo gestiona las conexiones de dispositivos, visite https://www.plaspy.com. Para instrucciones de configuración específicas del dispositivo, notas de firmware y orientación del fabricante para el AoYa T6, verifique los detalles en el sitio oficial de AoYa http://www.aoyagps.com/ ya que los procedimientos del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
