---
slug: /neomatica/adm100/protocol
id: adm100-protocol
sidebar_label: Protocol
title: Neomatica - ADM100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for Neomatica ADM100 connectivity and how it communicates with Plaspy for reliable fleet tracking
keywords:
  - Neomatica ADM100
  - ADM100 protocol
  - Neomatica GPS tracker
  - ADM100 GPS protocol
  - ADM100 Plaspy compatibility
  - vehicle tracking protocol
  - GPRS tracking protocol
  - EGTS tracker support
  - fleet management GPS
  - tracking device communication
---

# Neomatica - ADM100 Protocol

This page describes the public protocol context for using the Neomatica ADM100 tracker with Plaspy. It focuses on the communication and connection details that matter for integrating the ADM100 into Plaspy for real time tracking, event reporting and route history upload without exposing private implementation specifics.

The ADM100 is a compact GNSS tracker with GPRS reporting capability and optional EGTS support. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact packet behavior and available commands can vary by firmware version, hardware revision and manufacturer configuration, so consider this guidance as general integration context rather than a firmware reference.

## Protocol Overview

The ADM100’s communication protocol is the mechanism by which position, telemetry and event data are transmitted from the device to a backend such as Plaspy. In practice the protocol ensures the tracker can identify itself, report GPS fixes and send I/O and sensor events so that the data is usable on Plaspy maps, alerts and reports.

- Enables periodic and event driven transmission of position, speed and heading to the backend for live tracking.
- Carries I/O and sensor data such as analog inputs, pulse counts and discrete events for telemetry and alarms.
- Supports route history upload from the device non volatile memory so Plaspy can display historical tracks and fill gaps.
- May use standardized reporting modes such as EGTS or domain name addressing as supported by the device and manufacturer.
- Facilitates remote configuration and remote firmware update capability when implemented over GPRS by the manufacturer.

## How Plaspy Detects the Protocol

Plaspy is designed to accept data from many tracker models without requiring manual protocol selection. When an ADM100 is configured to report to Plaspy, the platform automatically identifies the incoming protocol and maps fields to the platform data model so live location and events appear correctly.

- Devices should be configured to report to d.plaspy.com or to the Plaspy server IP address 54.85.159.138 on the shared port 8888.
- Plaspy supports both UDP and TCP reporting modes where the device and firmware allow either transport on port 8888.
- All devices in Plaspy use the same port, simplifying deployment and server addressing for mass rollouts.
- If the ADM100 is configured to send data to the Plaspy endpoint, users typically do not need to manually select a protocol inside Plaspy.
- Automatic detection reduces setup friction, but correct device configuration (APN, server address, transport) is required for successful detection.

## Transport and Connection Context

Transport selection and server addressing are part of the connection context that determines how the ADM100 reaches Plaspy. The device supports GPRS reporting and can be pointed by domain name or IP to the Plaspy endpoint. Choose the transport type that matches the device firmware and your network requirements.

- The ADM100 may be configured to use UDP or TCP on port 8888 depending on firmware and configuration options.
- Point the device to the Plaspy domain d.plaspy.com or directly to 54.85.159.138 if required by device settings.
- Plaspy listens on port 8888 for all supported devices, so the same port is used across device types for simplicity.
- Ensure APN and SIM settings are correct on the ADM100 so GPRS sessions can establish and data can be delivered to the Plaspy endpoint.
- Use the transport mode that your deployment requires, noting that some firmware revisions prefer one transport over the other for acknowledgements and delivery behavior.

## Protocol Compatibility Notes

- Firmware revisions can change supported commands, reporting intervals and transport preferences; verify the ADM100 firmware level before large scale rollouts.
- Hardware revisions and configuration options (I/O wiring, RS‑485 attachments) may affect which telemetry fields are reported by the device.
- Manufacturer implementations may support EGTS or other standardized reporting modes in addition to vendor specific formats; confirm which mode is active on your units.
- Transport selection (UDP versus TCP) impacts delivery characteristics and should be matched to the device configuration and Plaspy expectations.
- Validate device server addressing either by domain name or IP depending on how your fleet management workflow and SIM providers handle DNS.
- Always cross reference compatibility notes with the official Neomatica documentation and firmware changelogs.

## Why Protocol Understanding Matters

Understanding how the ADM100 communicates helps ensure reliable setup, accurate data mapping in Plaspy and faster troubleshooting when devices do not behave as expected. Knowing which transport and reporting mode the device uses reduces guesswork during deployment and supports consistent operational monitoring.

- Simplifies initial configuration so devices report reliably to d.plaspy.com or 54.85.159.138 on port 8888.
- Improves troubleshooting by narrowing issues to APN, transport selection, or firmware behavior rather than Plaspy settings.
- Helps ensure analog, pulse and RS‑485 inputs are correctly interpreted and mapped to Plaspy telemetry fields.
- Supports planning for remote firmware updates and route history recovery from device memory.
- Enables predictable scaling by using the same Plaspy port and endpoint across all devices.

## Why Use Plaspy with This Protocol

Using the ADM100 with Plaspy provides a practical path to real time vehicle visibility, route playback and telemetry driven alerts. The ADM100’s GNSS sensitivity, non volatile route storage and flexible I/O make it well suited for fleet tracking, anti theft monitoring and telemetry applications where continuous reporting and local storage are important.

Plaspy’s automatic protocol detection and unified endpoint model reduce configuration overhead for deployments that include ADM100 units. To learn more about Plaspy and how it can integrate with Neomatica devices visit https://www.plaspy.com. Protocol support, firmware behavior and manufacturer implementation details can change over time, so confirm the latest device specific information on the Neomatica website https://neomatica.com/ before wide scale deployment.
