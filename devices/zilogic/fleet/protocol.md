---
slug: /zilogic/fleet/protocol
id: fleet-protocol
sidebar_label: Protocol
title: Zilogic - Fleet Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for Zilogic Fleet GPS tracker integration with Plaspy server settings and compatibility considerations
keywords:
  - Zilogic Fleet protocol
  - Zilogic Fleet GPS tracker
  - Zilogic Fleet Plaspy compatibility
  - Fleet tracker communication
  - GPS tracker protocol guide
  - vehicle tracking protocol
  - fleet management integration
  - Plaspy device compatibility
  - tracker transport settings
  - GPS telemetry and inputs
---

# Zilogic - Fleet Protocol

This page describes the public protocol context for using the Zilogic Fleet tracker with the Plaspy platform. It focuses on how the tracker communicates with Plaspy in general, what connection settings are required at a high level, and what practical considerations matter when integrating the device. The content is intended to be non-sensitive and helpful for technical users preparing devices for Plaspy integration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the Plaspy endpoint. Exact protocol behavior and available messages can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior can differ between units and over time.

## Protocol Overview

At a high level the tracker reporting protocol enables the device to deliver location, time, and I/O telemetry from the vehicle to a central server and to receive management messages when supported. For the Fleet tracker this typically includes GPS position and the state of digital and analog inputs, plus the ability to control outputs via supported remote commands when available.

- Provides a reliable channel for location and telemetry reporting from the tracker to Plaspy.
- Transmits identification and session information so Plaspy can correlate messages to the correct device record.
- Carries digital input states and analog measurements so Plaspy can present vehicle sensor data.
- Supports remote control or actuator commands where the manufacturer and firmware expose that capability.
- Works over standard internet transports so devices can report from mobile networks to Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared endpoint and automatically detects the tracker protocol based on the incoming data and expected reporting behavior. In most deployments a properly configured Fleet tracker will report to Plaspy without requiring users to select a protocol manually inside the platform.

- Plaspy accepts reports at the domain d.plaspy.com and at the server IP 54.85.159.138.
- All devices supported by Plaspy use the same listening port so management is simplified for fleets.
- The port used by Plaspy for device reporting is 8888 and devices may be configured to use UDP or TCP.
- When the tracker is configured to report to the Plaspy endpoint, Plaspy will attempt automatic protocol detection so manual protocol selection is typically unnecessary.
- If a device is not appearing, confirm the reporting destination and transport on the device and verify network connectivity.

## Transport and Connection Context

Connection context describes how the tracker reaches Plaspy over the mobile network and the transport choices that affect reachability. The Fleet tracker can be configured to use either UDP or TCP depending on the unit and firmware capabilities; both transports are supported by Plaspy on the same port.

- Devices may be configured to point to the domain d.plaspy.com or directly to the server IP 54.85.159.138.
- Plaspy listens on port 8888 for all devices, so this port should be used in device server settings regardless of model.
- The device may use either UDP or TCP on port 8888; choose the transport supported by your firmware and mobile network.
- Ensure APN and mobile data settings on the SIM and device are correct so packets can leave the device and reach Plaspy.
- Network firewalls or carrier restrictions that block outbound UDP or TCP on the chosen transport can prevent reporting.

## Protocol Compatibility Notes

- Firmware revisions can change the set of telemetry fields, reporting intervals, and supported transports; always check the device firmware version.
- Hardware variants or production revisions may alter available inputs, outputs, or serial interfaces and thus change what the protocol reports.
- The same device model can support different reporting options depending on configuration, such as enabling or disabling serial peripherals or specific I/O mappings.
- Selecting UDP versus TCP affects reliability and retransmission behavior at the transport layer but does not change the high level requirement to report to the Plaspy endpoint.
- Validate compatibility by testing a representative device with the Plaspy endpoint before deploying at scale.
- Consult the manufacturer documentation for firmware specific details and any optional protocol modes that may not be publicly described here.

## Why Protocol Understanding Matters

Understanding how the tracker communicates with Plaspy helps ensure reliable setup, straightforward troubleshooting, and predictable long term operation for fleet deployments. Awareness of transport, firmware, and I/O reporting behavior reduces time to resolve connectivity and telemetry issues.

- Correct server endpoint and transport settings are essential for initial connectivity to Plaspy.
- Knowing which inputs and analog channels the tracker reports helps map device telemetry to Plaspy dashboard fields.
- Firmware version awareness makes it easier to recognize behavioral differences between devices and apply consistent configurations.
- Understanding device network behavior assists in diagnosing intermittent reporting caused by coverage, APN, or carrier issues.
- Clear knowledge of available outputs and control capabilities informs safe remote management and immobilization workflows when supported.

## Why Use Plaspy with This Protocol

Using Plaspy with the Zilogic Fleet tracker gives organizations a centralized way to collect GPS positions and vehicle telemetry from digital and analog inputs, plus a consistent endpoint and port configuration across devices. Plaspy’s automatic protocol detection and uniform port usage simplify large scale rollouts and reduce per-device configuration overhead.

If you want to learn more about Plaspy and how it integrates with devices like the Zilogic Fleet tracker, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware documentation verify information with the manufacturer at https://zilogic.com/ as implementations can change over time.
