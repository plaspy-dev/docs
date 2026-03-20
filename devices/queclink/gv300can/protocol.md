---
slug: /queclink/gv300can/protocol
id: gv300can-protocol
sidebar_label: Protocol
title: QuecLink - GV300CAN Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for QuecLink GV300CAN and how it communicates with Plaspy for tracking and telemetry
keywords:
  - QuecLink GV300CAN protocol
  - QuecLink GV300CAN GPS protocol
  - GV300CAN Plaspy compatibility
  - GV300CAN communication protocol
  - QuecLink vehicle tracker protocol
  - GV300CAN CANBus telemetry
  - Plaspy tracker integration
  - Fleet tracking GV300CAN
  - Cold chain GV300CAN monitoring
  - QuecLink GPS tracker protocol
---

# QuecLink - GV300CAN Protocol

This page provides public protocol context for using the QuecLink GV300CAN tracker with Plaspy. It explains how the device communicates with Plaspy in general, what role the device protocol plays in reporting GNSS positions, CANBus telemetry and sensor events, and what to consider during integration and troubleshooting. The intent is to describe communication behavior at a high level without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision and manufacturer implementation. The GV300CAN ships with TCP, UDP and SMS transport options and Queclink’s proprietary @Track protocol, and those options determine how the tracker reports to Plaspy in practice.

## Protocol Overview

The protocol implemented on the GV300CAN defines how the tracker formats and transmits position, CANBus frames, digital and analog inputs, and alarm events to a backend endpoint such as Plaspy. In operational terms the protocol enables identification, periodic or event driven reporting, and reception of remote commands when the transport supports two way sessions.

- Carries GNSS position and fix metadata so Plaspy can place the device on a live map and compute movement metrics.
- Encodes CANBus and J1708 telemetry so engine, speed and diagnostic fields can be surfaced inside Plaspy.
- Conveys alarm and input events such as geo fence, crash detection and low battery to trigger alerts and workflows.
- Supports different transports including TCP, UDP and SMS so reporting can match network and deployment requirements.
- Allows remote commands and output control when two way communication is active, enabling immobilizer and remote control workflows.

## How Plaspy Detects the Protocol

Plaspy receives device traffic at a shared endpoint and uses that traffic to identify the tracker protocol automatically. In most cases a GV300CAN configured to report to Plaspy will be recognized without manual protocol selection, simplifying setup for fleet integrators and installers.

- Plaspy listens on a single public endpoint for device reporting at d.plaspy.com and at IP address 54.85.159.138.
- The platform accepts device connections on port 8888 for all supported devices so a single port is used across device types.
- Devices may be configured to use either UDP or TCP on port 8888 when reporting to Plaspy.
- Because Plaspy auto detects the tracker protocol, users typically do not need to pick a protocol inside the platform if the device is correctly pointed to the Plaspy endpoint.
- If a device also supports SMS reporting, that transport can be used as a fallback where supported by deployment and carrier.

## Transport and Connection Context

Connection setup determines whether the tracker operates in a session oriented mode or in connectionless reporting, and this affects latency, command responsiveness and session state. The GV300CAN supports multiple transports so choose what matches coverage and operational needs.

- The GV300CAN may be configured to use UDP or TCP for direct reporting to Plaspy on port 8888.
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to the IP 54.85.159.138 for reporting.
- All devices that report to Plaspy share the same port 8888 simplifying firewall and network configuration.
- TCP reporting supports persistent sessions for command exchange; UDP is available for lightweight, connectionless telemetry reporting.
- SMS remains an option on the GV300CAN for alternate reporting and fallback depending on firmware and carrier support.

## Protocol Compatibility Notes

- Manufacturer firmware versions can change the set of supported messages, fields and transport options; validate against current Queclink documentation for firmware specific behavior.
- Hardware revisions and regional SKUs may differ in available interfaces such as CAN or J1708 support; confirm the installed variant matches your integration needs.
- Transport selection matters for command responsiveness and session behavior; test both TCP and UDP configurations where possible.
- Plaspy automatically detects protocol but correct device configuration pointing to the Plaspy endpoint is required for detection to succeed.
- SMS reporting behavior and command support can vary by carrier and firmware, so test SMS workflows where they are relied upon.
- Always verify compatibility for specific telemetry fields you need, such as CAN signal mappings or analog sensor conversions, before large scale deployment.

## Why Protocol Understanding Matters

Understanding how the GV300CAN communicates helps ensure reliable installation, correct data mapping into Plaspy, and faster troubleshooting when devices behave unexpectedly. Awareness of protocol capabilities also informs choices about transport, firmware management and which telemetry fields will be available to reports and alerts.

- Reduces configuration errors by matching device transport and endpoint settings to Plaspy requirements.
- Helps map CANBus and sensor channels to the correct fields inside Plaspy for accurate reporting.
- Improves troubleshooting by clarifying whether an issue is network, transport, firmware, or configuration related.
- Supports planning for firmware updates and hardware rollouts by highlighting dependency on manufacturer changes.
- Enables better design of alerting and automation by knowing which events and inputs the tracker will transmit.

## Why Use Plaspy with This Protocol

Using the GV300CAN with Plaspy gives organizations a practical route to capture GNSS positions, vehicle CAN telemetry, sensor data and event alerts in a single fleet management platform. The combination of vehicle grade interfaces and Plaspy’s centralized ingestion makes it straightforward to create location based alerts, telematics reports and remote control workflows such as immobilization or output switching.

If you want to learn more about how Plaspy handles device connectivity, reporting and fleet workflows visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes and hardware revisions refer to the official Queclink documentation at https://www.queclink.com/ as manufacturer behavior and protocol support can evolve over time.
