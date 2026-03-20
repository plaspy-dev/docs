---
slug: /boxtrack/control/protocol
id: control-protocol
sidebar_label: Protocol
title: BoxTrack - Control Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for BoxTrack Control GPS tracker and Plaspy compatibility for reliable vehicle monitoring
keywords:
  - BoxTrack Control protocol
  - BoxTrack Control GPS
  - BoxTrack tracking protocol
  - BoxTrack Plaspy compatibility
  - BoxTrack GPS tracker
  - vehicle tracking protocol
  - tracker communication protocol
  - fleet management Plaspy
  - GPS device protocol
  - anti theft tracker protocol
---

# BoxTrack - Control Protocol

This page provides the public protocol context for using the BoxTrack Anti-Theft Control tracker with Plaspy. It is focused on how the device communicates with Plaspy in general, which messages and capabilities are commonly exchanged, and what to consider when configuring the tracker to report location and status to the Plaspy platform.

The BoxTrack Anti-Theft Control is a feature rich vehicle tracker with sub 5 meter GPS accuracy, remote engine cut off, SOS button, live audio monitoring, G sensor alerts, multi network connectivity, internal memory for up to 2,000 reports, and a backup battery. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary with firmware versions, hardware revisions, and manufacturer implementation choices.

## Protocol Overview

The tracker protocol is the set of rules and message types the BoxTrack Control uses to report position, status events, and telemetry to a remote server. For integration with Plaspy, the protocol's public aspects determine how the device identifies itself, delivers periodic or event-driven location reports, and carries key attributes such as SOS, ignition state, and sensor alerts.

- The protocol enables transmission of GPS coordinates and timing so Plaspy can show accurate location and history.
- Telemetry fields for ignition, battery level, G sensor events, and remote control responses tell Plaspy the device state.
- SOS and emergency alerts are reported so Plaspy can raise notifications and enable response workflows.
- The protocol supports buffering to internal memory so reports are retained during temporary connectivity loss.
- Control related events such as engine cut off status and remote command acknowledgements allow Plaspy to reflect remote actions in the platform.

## How Plaspy Detects the Protocol

Plaspy listens on a shared network endpoint and automatically detects the tracker protocol used by devices that report to the service. In most cases an installer or device configuration only needs to point the BoxTrack Control to the Plaspy endpoint and port; Plaspy will attempt to identify the protocol and begin decoding supported messages.

- Plaspy server domain for device reporting is d.plaspy.com.
- The Plaspy server IP address is 54.85.159.138 and the listening port is 8888.
- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138 depending on installer preference.
- The device may be configured using UDP or TCP on port 8888.
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol.
- When the tracker is correctly configured to report to the Plaspy endpoint, manual selection of a protocol inside Plaspy is typically unnecessary.

## Transport and Connection Context

Connection context covers the transport layer and addressing the device uses to reach Plaspy. For the BoxTrack Control, transport selection and DNS or IP targeting determine how reliably messages are delivered under different network conditions.

- The device may use UDP or TCP for reporting depending on device support and chosen configuration.
- Plaspy accepts incoming reports on port 8888 for all supported devices.
- Devices can point to the Plaspy domain d.plaspy.com or to the IP 54.85.159.138 based on configuration options or network constraints.
- UDP can be useful for lightweight frequent reporting while TCP can help with guaranteed delivery for larger messages or acknowledgements if supported.
- Network handoffs between 4G and 2G networks affect connectivity resilience and may influence reporting behavior.

## Protocol Compatibility Notes

- Firmware changes can add, remove, or modify fields in outgoing reports; verify firmware release notes for protocol changes.
- Hardware revisions sometimes alter available inputs or sensor wiring that affect what telemetry the tracker reports.
- Manufacturer configuration menus or SMS setup commands may differ between firmware builds; follow the device documentation when setting the Plaspy endpoint.
- Choosing UDP versus TCP affects delivery semantics and may require different settings on carrier networks or NAT devices.
- Internal memory behavior (for example storing up to 2,000 reports) and upload strategies can vary by firmware and affect how historical data is recovered.
- Verify compatibility by testing a device on the Plaspy endpoint before large scale deployment.

## Why Protocol Understanding Matters

Understanding how the BoxTrack Control communicates helps installers, integrators, and fleet managers achieve a reliable deployment, diagnose issues, and ensure accurate operational data in Plaspy. Clear protocol expectations reduce setup time and improve incident response.

- Proper endpoint and transport configuration reduces lost reports and ensures timely updates in Plaspy.
- Knowing which telemetry fields are available lets you map device capabilities to Plaspy monitoring and alerting.
- Awareness of firmware and hardware differences helps prioritize firmware updates and staged rollouts.
- Understanding buffering and memory behavior aids interpretation of delayed or batched reports after connectivity gaps.
- Protocol awareness supports coordinated troubleshooting between device vendors, carriers, and Plaspy support.

## Why Use Plaspy with This Protocol

Using the BoxTrack Anti-Theft Control with Plaspy gives organizations centralized visibility of vehicle position, safety events, and remote control actions. Plaspy's shared endpoint approach simplifies device configuration and the platform automatically detects the tracker protocol so devices can begin reporting with minimal manual mapping.

Plaspy supports enterprise workflows for monitoring SOS events, tracking historical routes, and observing sensor driven alerts such as impact or harsh driving. To learn more about how Plaspy can work with the BoxTrack Control and other devices, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific protocol information on the manufacturer official website.
