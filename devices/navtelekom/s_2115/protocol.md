---
slug: /navtelekom/s_2115/protocol
id: s_2115-protocol
sidebar_label: Protocol
title: Navtelekom - СИГНАЛ S-2115 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Navtelekom СИГНАЛ S-2115 tracker compatibility with Plaspy servers and connection guidance
keywords:
  - Navtelekom S-2115 protocol
  - Navtelekom СИГНАЛ S-2115
  - S-2115 GPS protocol
  - S-2115 communication
  - Plaspy device compatibility
  - Plaspy GPS tracker
  - vehicle tracking protocol
  - GLONASS GPS tracker
  - S-2115 alarm reporting
  - legacy tracker integration
---

# Navtelekom - СИГНАЛ S-2115 Protocol

This page describes the public protocol context for integrating the Navtelekom СИГНАЛ S-2115 tracker with the Plaspy platform. It focuses on how the device communicates in general terms, how Plaspy ingests tracker data, and what to check when onboarding S-2115 units. The S-2115 is a GLONASS/GPS vehicle tracker with GSM communications, an internal accelerometer for impact and tilt detection, SMS and voice alarm delivery, and a USB configurator for local setup and firmware updates.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once the device reports to the Plaspy endpoint. Exact behavior of device reports and command handling can vary by firmware version, hardware revision, and manufacturer implementation, so device-specific details may differ between archived S-2115 units and other SIGNAL family hardware.

## Protocol Overview

The S-2115 communication protocol is the mechanism the tracker uses to report position, alarms, and status to a central server and to receive remote commands or configuration via GSM. For integration with Plaspy, the important public aspects are how the device establishes a transport connection, identifies itself, and sends telemetry and event notifications that the platform can interpret for real time tracking and alerts.

- Carries GNSS position data plus event information such as impact, tilt, power state, and input/output events.
- Transmits telemetry and alarms over cellular data or alternative channels that Plaspy can ingest for live monitoring.
- Supplies device identity and session information so a server can associate incoming reports with a tracked vehicle.
- Enables remote parameter queries and simple remote commands via supported transport or secondary channels like SMS or voice.
- Works alongside local USB configuration tools and firmware updates which affect how the device behaves on the network.

## How Plaspy Detects the Protocol

Plaspy accepts connections on a common ingestion endpoint and automatically determines the incoming tracker protocol when properly configured device reports are received. For most users this means ensuring the S-2115 is pointed to the Plaspy endpoint and that network transport settings match the device capabilities. Manual protocol selection inside Plaspy is typically not required when the device is sending data to the Plaspy endpoint.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP address is 54.85.159.138 for direct IP configuration.
- The ingestion port used by Plaspy is 8888 and is the same port for all devices supported by Plaspy.
- The device may be configured to use either UDP or TCP on port 8888 depending on device support and site configuration.
- Plaspy automatically detects the tracker protocol once the device connects to the endpoint and begins reporting.

## Transport and Connection Context

When integrating the S-2115 with Plaspy, focus on the transport and addressing used by the device to reach Plaspy rather than low level packet internals. The S-2115 can send GNSS fixes and alarms over cellular networks; configuration choices determine whether reports reach Plaspy via UDP or TCP and whether the device points to a DNS name or an IP address.

- Devices can be configured to report to d.plaspy.com or directly to 54.85.159.138.
- Network transport may be UDP or TCP on port 8888 depending on the device configuration.
- Plaspy uses the same port 8888 for all supported devices to simplify onboarding.
- If connecting by DNS, ensure the device has correct APN and cellular data settings.
- Local USB configuration using the supplier configurator is commonly used to set reporting endpoints and transport preferences before deployment.

## Protocol Compatibility Notes

- Firmware differences across archived S-2115 units can change how reports are formatted and what fields are included.
- Hardware revisions or production variants may affect available inputs, alarm behavior, or supported transport modes.
- Manufacturer-side changes or regional firmware builds can introduce variations in command syntax or reporting cadence.
- Transport selection between UDP and TCP may impact delivery characteristics such as reliability and latency.
- SMS and voice alarm methods exist separately from data reporting and may be used for alert escalation or for devices without active data connections.
- Validate expected behavior against the device operator guide and available NTC Configurator tools when possible.

## Why Protocol Understanding Matters

A practical understanding of how the S-2115 communicates helps ensure reliable onboarding, effective troubleshooting, and consistent long term telemetry for Plaspy users. Knowing what the device will report and how it establishes connections reduces integration friction and helps operations teams interpret alerts and historical logs.

- Ensures the device is pointed to the correct Plaspy endpoint and using the supported transport.
- Helps diagnose connectivity issues by separating network, transport, and device configuration factors.
- Supports accurate mapping of device events to alarm and reporting workflows in Plaspy.
- Informs decisions about firmware updates, local configurator usage, and deployment practices for archived units.
- Aids planning for fallback channels such as SMS or voice where cellular data is unreliable.

## Why Use Plaspy with This Protocol

Using the Navtelekom СИГНАЛ S-2115 with Plaspy provides centralized visibility for vehicle location, event alarms, and operational telemetry that fleet managers and security teams rely on. Plaspy consumes the S-2115 position and event reports to populate dashboards, trigger configurable alerts, and maintain historical logs for analysis and incident review. For legacy or archived deployments the S-2115 remains useful for core tracking and accelerometer based alarms when configured correctly.

To learn more about Plaspy and how it handles device ingestion, reporting, and alerting, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and configuration tools for the СИГНАЛ S-2115 please verify information on the manufacturer site https://www.navtelecom.ru/ as device implementations and firmware versions can change over time.
