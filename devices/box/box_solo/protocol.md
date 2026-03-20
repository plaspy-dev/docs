---
slug: /box/box_solo/protocol
id: box_solo-protocol
sidebar_label: Protocol
title: Box - Box Solo Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Box Solo trailer tracker and how it communicates with Plaspy for reliable fleet monitoring
keywords:
  - Box Solo protocol
  - Box GPS protocol
  - Box Solo Plaspy
  - GPS tracker protocol
  - trailer tracking protocol
  - vehicle tracking Plaspy
  - Box Solo communication
  - GSM GPRS tracker
  - tracker compatibility Plaspy
  - device protocol guide
---

# Box - Box Solo Protocol

This page describes the public protocol context for using the Box Solo trailer tracker with Plaspy. It summarizes how the tracker communicates in non sensitive terms, what the protocol role is in everyday operation, and what to check when integrating a Box Solo device into the Plaspy platform. The Box Solo is a compact trailer tracking unit with high sensitivity GPS, quad band GSM GPRS, internal memory, and a backup battery, commonly used for trailer visibility and recovery.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is correctly pointed at the Plaspy endpoint. Exact reporting behavior and command support can vary with firmware version, hardware revision, and manufacturer implementation, so treat this page as a protocol overview rather than a firmware specific how to.

## Protocol Overview

The tracker communication protocol defines how the Box Solo sends position, status, and event information to a remote server and how that data becomes usable in Plaspy. In plain terms, the protocol lets the device identify itself, report telemetry, and ensure data reaches Plaspy even when connectivity is intermittent.

- Enables transmission of GPS positions and device status from the Box Solo to a remote server for processing.
- Carries device identity information so Plaspy can associate incoming reports with the correct asset.
- Supports reporting triggers common to trailer tracking such as time, distance, and angle change as provided by the device.
- Uses GSM GPRS for transport and can buffer data in internal memory when the connection is unavailable.
- Accommodates device power saving modes and backup battery behavior that affect reporting cadence.

## How Plaspy Detects the Protocol

Plaspy accepts device reports on a shared endpoint and port and identifies the tracker protocol automatically, which removes the need for most users to select a protocol manually in the platform. When a Box Solo is configured to report to Plaspy, the platform matches incoming reports to a known protocol pattern and associates the data with the correct device record.

- Plaspy provides a single server endpoint for device reporting to simplify setup and detection.
- Devices pointing to the Plaspy endpoint are analyzed and the tracker protocol is detected automatically.
- Users typically do not need to specify protocol settings inside Plaspy when the device is correctly configured to report to the Plaspy endpoint.
- Proper device identity information in reports allows Plaspy to map messages to the correct asset without manual protocol selection.
- If a device fails to appear, verify device network settings, server address, and that the device has a compatible firmware version.

## Transport and Connection Context

Connection context covers how the Box Solo reaches Plaspy over the mobile network. The Box Solo supports GSM and GPRS transports and may use either UDP or TCP depending on configuration and firmware. Plaspy listens on a single port and endpoint for all supported devices to simplify configuration.

- Box Solo devices may be configured to use UDP or TCP on port 8888 depending on device support and configuration.
- Devices can point to the Plaspy server domain d.plaspy.com or directly to the server IP 54.85.159.138.
- Plaspy uses the same port 8888 for all devices to reduce configuration complexity.
- Ensure the SIM APN and network settings on the tracker are correct so it can reach the Plaspy endpoint.
- Confirm that any carrier firewalls or APN restrictions allow outbound TCP or UDP traffic to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware variations across Box Solo units can change available reporting options and timing; verify the firmware level when diagnosing behavior.
- Hardware revisions or regional variants may differ in radio band support and available inputs or power modes.
- The Box Solo supports reporting triggers by time, distance, and angle change which may be configurable and affect message volume.
- Selection of UDP versus TCP on the device influences delivery behavior and should match your configuration and carrier reliability expectations.
- Always validate device network credentials and APN settings as part of compatibility checks.
- Confirm antenna and installation quality because GPS reception and GSM signal strength impact reporting reliability.
- Consult the manufacturer documentation for details about supported transports and any model specific limitations.

## Why Protocol Understanding Matters

A clear, practical understanding of the tracker communication protocol helps ensure a smooth integration and reliable operation with Plaspy. Knowing what the tracker sends, how it connects, and what can vary between units makes setup and troubleshooting faster and more predictable.

- Ensures the device is configured to report to d.plaspy.com or the Plaspy server IP and uses port 8888 as required.
- Helps choose UDP or TCP appropriately for expected network conditions and message reliability.
- Reveals how power saving and backup battery behavior will affect reporting cadence and offline buffering.
- Aids in mapping device inputs such as digital and analogue sensors to events you want to see in Plaspy.
- Speeds troubleshooting by narrowing focus to APN settings, SIM provisioning, and firmware differences.

## Why Use Plaspy with This Protocol

Using the Box Solo with Plaspy provides a practical way to turn trailer position and status reports into actionable fleet intelligence. Plaspy centralizes incoming data, handles protocol detection for you, and presents location and event information that fleet managers use for visibility, recovery, and operational control.

If you are evaluating a Box Solo deployment, Plaspy's shared endpoint model and automatic protocol detection simplify large scale rollouts and reduce per device configuration. To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. Please verify device specific protocol details, firmware behavior, and the latest manufacturer instructions on the official Box Telematics site http://www.boxtelematics.com/ as implementation details can change over time.
