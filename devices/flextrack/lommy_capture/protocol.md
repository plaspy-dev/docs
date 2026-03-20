---
slug: /flextrack/lommy_capture/protocol
id: lommy_capture-protocol
sidebar_label: Protocol
title: Flextrack - Lommy Capture Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Flextrack Lommy Capture integration with Plaspy for GPS tracking and fleet monitoring
keywords:
  - Flextrack Lommy Capture protocol
  - Flextrack Lommy Capture GPS protocol
  - Lommy Capture communication protocol
  - Lommy Capture tracking protocol
  - Flextrack tracker protocol
  - Lommy Capture Plaspy compatibility
  - Flextrack GPS tracker protocol
  - Lommy Capture UDP TCP tracking
  - Flextrack trailer tracker protocol
  - Lommy Capture energy harvesting tracker
---

# Flextrack - Lommy Capture Protocol

This page documents the public protocol context for using the Flextrack Lommy Capture tracker with Plaspy. It explains how the device communicates with Plaspy in general terms so integrators, fleet managers, and technicians can understand the role of the communication protocol when connecting Lommy Capture devices to the platform.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol when devices report to the Plaspy endpoint. Exact behavior can vary with firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, non sensitive protocol context and practical connectivity guidance rather than device internals.

## Protocol Overview

The Lommy Capture reporting protocol defines how the tracker sends location, motion, telemetry, and alarm messages to cloud endpoints. In practice this protocol enables the device to identify itself to Plaspy, deliver timely position updates, and provide event data that Plaspy can map into alerts, geofences, and historical routes.

- Enables position reporting and telemetry delivery from Lommy Capture to the cloud so Plaspy can display live location and history.
- Carries event messages such as motion, power disconnects, and configurable alarms that trigger notifications and automation in Plaspy.
- Supports intermittent and persistent reporting modes that reflect the device power state and energy harvesting behavior.
- Allows the device to include identifying metadata so Plaspy can associate reports with the correct asset record.
- Provides a transport-agnostic payload pattern that Plaspy ingests when devices are configured to report to the shared Plaspy endpoint.

## How Plaspy Detects the Protocol

Plaspy is designed to accept inbound reports from many device models without requiring manual protocol selection. When a Lommy Capture is configured to report to Plaspy, the platform uses the shared Plaspy endpoint and port to receive messages and automatically detect the tracker protocol so onboarding is typically straightforward.

- Devices should be configured to report to the Plaspy endpoint d.plaspy.com or the server IP 54.85.159.138.
- Plaspy listens on a single port used by all supported trackers so users do not need to manage per device port assignments.
- The port used for Plaspy ingestion is 8888 and devices may be configured to use UDP or TCP to reach that port.
- When data arrives at Plaspy, the platform matches identifying fields and message patterns to select the appropriate parsing flow automatically.
- In most cases there is no need to select the protocol manually inside Plaspy if the device is correctly reporting to the shared endpoint.

## Transport and Connection Context

Connection choices affect how reports travel from Lommy Capture to Plaspy but do not change the public role of the protocol itself. Lommy Capture supports common cellular transports and can deliver messages over IP or SMS depending on configuration and network conditions.

- Lommy Capture may use UDP or TCP on port 8888 when sending IP based reports to Plaspy.
- Devices can be pointed to the domain d.plaspy.com or the IP address 54.85.159.138 as the Plaspy ingestion endpoint.
- All devices supported by Plaspy use the same port, simplifying firewall and gateway configuration for fleets.
- Transport selection (UDP vs TCP) typically depends on device settings, mobile network behavior, and operator preference.
- For installations that use SMS fallback, Plaspy ingestion can be coordinated through supported gateway paths rather than the IP endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message frequency, field names, or available telemetry; verify behavior for the specific firmware on each device batch.
- Hardware revisions or manufacturing variants may adjust sensors, power behavior, or available transports and thus affect reporting patterns.
- Devices may offer configurable transport modes; confirm whether Lommy Capture units in your fleet are set to UDP or TCP for Plaspy integration.
- Energy harvesting behavior influences reporting cadence when the device is powered by lighting circuits versus disconnected states.
- Manufacturer side configuration (for example, default server or SMS gateway) can affect initial connectivity; update device configuration to point at Plaspy when required.
- Always validate compatibility and recommended settings against the official manufacturer documentation for the specific Lommy Capture unit.

## Why Protocol Understanding Matters

Understanding how the Lommy Capture communicates helps streamline setup, minimize downtime, and improve the reliability of tracking data delivered into Plaspy. Awareness of transport and firmware differences also helps troubleshooting and ensures alerts and historical data are captured correctly.

- Ensures devices are correctly configured to report to d.plaspy.com or 54.85.159.138 on port 8888 so Plaspy can ingest data.
- Helps diagnose why a device may report less frequently when operating on harvested energy versus when fully powered.
- Guides decisions about UDP versus TCP transport and any network adjustments needed for reliable delivery.
- Supports verifying that event and alarm messages are mapped into the correct asset records in Plaspy.
- Reduces onboarding time by clarifying what information Plaspy needs to match a device to an account.

## Why Use Plaspy with This Protocol

Using Lommy Capture with Plaspy gives fleet operators a pragmatic solution for trailer and towed asset visibility that balances discreet installation and low maintenance. Plaspy consumes the device reports and turns them into live telemetry, geofence alerts, historical playback, and reporting useful for operations, theft prevention, and utilization analysis.

Plaspy’s single ingestion endpoint and automatic protocol detection minimize configuration overhead while allowing Lommy Capture’s energy harvesting and motion sensing features to deliver meaningful fleet insights. To learn more about Plaspy and supported device workflows visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and implementation notes with the manufacturer at https://flextrack.dk.
