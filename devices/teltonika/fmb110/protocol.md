---
slug: /teltonika/fmb110/protocol
id: fmb110-protocol
sidebar_label: Protocol
title: Teltonika - FMB110 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for Teltonika FMB110 communication with Plaspy connection and compatibility context
keywords:
 - Teltonika FMB110
 - FMB110 protocol
 - Teltonika FMB110 GPS protocol
 - FMB110 communication protocol
 - FMB110 tracking protocol
 - Teltonika GPS tracker
 - Plaspy compatibility
 - vehicle tracking protocol
 - cold chain telemetry
 - BLE GPS tracker
---

# Teltonika - FMB110 Protocol

This page outlines the public protocol context for using the Teltonika FMB110 tracker with Plaspy. It focuses on how the device reports location and telemetry to the Plaspy platform and what connection settings are commonly used for integration, while remaining high level and non sensitive about internal parser or binary specifics.

The Teltonika FMB110 is a compact 2G vehicle tracker with internal cellular and GNSS antennas, 1-Wire support for DS18B20 probes and iButton tags, BLE connectivity, and immobilizer control. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

At a public level the tracker communication protocol defines how the FMB110 transmits GNSS positions, telemetry, sensor readings, and status information to a remote server such as Plaspy. The protocol is the means by which the device identifies itself, reports events, and supports remote monitoring and control workflows without exposing device internals.

- Enables the FMB110 to report GPS position, timestamps, and vehicle status to Plaspy for real time mapping and history.
- Carries telemetry from on board interfaces such as 1-Wire temperature sensors, BLE sensor inputs, and digital inputs used for ignition or door status.
- Conveys device identification and status metadata so Plaspy can associate incoming messages with the correct asset and configuration.
- Supports remote actions and monitoring flows such as immobilizer state and alerting without describing vendor specific command frames.
- Acts as the foundation for higher level features in Plaspy like alerts, reports, and dashboards that consume the tracker data.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and inspects publicly observable data to determine the device protocol. Because Plaspy uses unified connection settings for supported trackers, the typical integration does not require manual protocol selection inside Plaspy when the device is configured correctly.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 on port 8888.
- Devices may be configured to report to either d.plaspy.com or 54.85.159.138 and use TCP or UDP to reach the server.
- The device may be configured using UDP or TCP on port 8888 depending on device support and network preferences.
- All devices in Plaspy use the same port which simplifies firewall and network configuration for large deployments.
- Plaspy automatically detects the tracker protocol so users typically do not need to choose a specific protocol setting inside the platform when the tracker is pointed to the Plaspy endpoint.

## Transport and Connection Context

Connection context covers how the FMB110 reaches Plaspy on the network level. The FMB110 is commonly used on cellular networks where DNS, APN, and transport type can affect delivery. Keeping transport details clear helps with firewall rules, DNS configuration, and troubleshooting.

- The port is 8888 and the device may be configured to use either UDP or TCP on port 8888.
- Pointing the tracker to d.plaspy.com or to the numeric address 54.85.159.138 both direct traffic to Plaspy servers.
- Because Plaspy uses the same port for all supported devices, network policies can be standardized across a fleet.
- Use DNS where possible to allow server IP changes without reconfiguring end devices, while the numeric IP can be used for environments that require it.
- Ensure outgoing device traffic to the Plaspy endpoint is permitted by carrier and firewall settings to avoid blocked telemetry.

## Protocol Compatibility Notes

- Device behavior and supported message elements can vary by firmware build; verify firmware release notes for feature differences.
- Hardware revisions or SKU variations may affect available interfaces such as BLE range, 1-Wire support, or immobilizer wiring.
- Transport selection (UDP vs TCP) may be limited by carrier networks or specific device configuration options; confirm device settings before wide rollout.
- Manufacturer side improvements or changes can alter timing, optional fields, or sensor reporting; always validate against current device documentation.
- Test a small number of devices in your Plaspy environment before large scale deployment to confirm expected behavior.
- When in doubt, consult Teltonika product resources and the device configurator to confirm supported features for your firmware and hardware revision.

## Why Protocol Understanding Matters

Understanding the communication protocol at a high level helps technicians and integrators set up devices correctly, troubleshoot data flow issues, and map device outputs to Plaspy features such as alerts and reports. It also aids in planning for network and operational constraints.

- Accelerates setup by matching device reporting settings to Plaspy connection requirements.
- Reduces troubleshooting time when telemetry or sensor streams do not appear in Plaspy dashboards.
- Helps ensure that sensor channels such as 1-Wire temperature probes and BLE sensors are mapped and interpreted consistently.
- Supports compatibility checks across firmware updates and hardware revisions.
- Enables predictable firewall and carrier configuration planning for fleet scale rollouts.

## Why Use Plaspy with This Protocol

Using the Teltonika FMB110 with Plaspy gives organizations a compact, sensor capable tracker feeding real time position and telemetry into a single platform. The FMB110’s support for 1-Wire temperature sensors, BLE accessories, and immobilizer control complements Plaspy’s mapping, alerting, and reporting capabilities to address fleet tracking, cold chain monitoring, and anti-theft use cases.

To learn more about Plaspy and how it integrates with devices like the Teltonika FMB110 visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific information with Teltonika at https://www.teltonika-gps.com/ to ensure you have the current compatibility and configuration guidance.
