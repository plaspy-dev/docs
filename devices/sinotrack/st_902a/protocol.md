---
slug: /sinotrack/st_902a/protocol
id: st_902a-protocol
sidebar_label: Protocol
title: SinoTrack - ST-902A Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for SinoTrack ST 902A integration with Plaspy server connectivity and configuration
keywords:
  - SinoTrack ST 902A protocol
  - SinoTrack ST 902A GPS protocol
  - ST 902A Plaspy compatibility
  - ST 902A OBD GPS tracker
  - SinoTrack tracking protocol
  - ST 902A fleet tracking
  - Plaspy compatible trackers
  - GPRS GPS tracker ST 902A
  - vehicle tracking ST 902A
  - ST 902A communication protocol
---

# SinoTrack - ST-902A Protocol

This page describes the public protocol context for using the SinoTrack ST-902A New Mini OBD GPS Tracker with Plaspy. It focuses on how the device communicates with a Plaspy server in non sensitive, implementation independent terms and explains the settings you typically configure to point the tracker to Plaspy for real time tracking, alerts, and historical playback.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol when the device is correctly pointed to the Plaspy endpoint. Exact on device protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation, so this page presents general, non proprietary guidance that is safe for public consumption.

## Protocol Overview

The ST-902A communicates position, movement, and alarm telemetry from the vehicle to an online endpoint over cellular data. The tracker can also be configured and queried via SMS for APN and server settings, which is a common method to point on device reporting to a third party platform like Plaspy.

- Provides periodic GPS reports plus event driven messages for alarms and movement
- Carries identifying information so the receiving server can associate data with a device
- Sends telemetry over the cellular link to a configured server endpoint for ingestion
- Supports SMS command based configuration for APN, server address and basic device queries
- Enables Plaspy to ingest position and event data for real time monitoring and historical playback

## How Plaspy Detects the Protocol

Plaspy receives incoming telemetry at a single shared endpoint and automatically detects the tracker protocol when data arrives. In most deployments you only need to configure the device to report to Plaspy and the platform will handle protocol identification and message processing.

- Point the device to the Plaspy server endpoint and the platform will attempt automatic detection
- No manual protocol selection is typically required inside Plaspy when the tracker is correctly configured
- Device identity such as IMEI is used by Plaspy to register and associate incoming feeds
- Plaspy supports the common transport modes used by cellular trackers for direct ingestion
- If multiple devices are reporting, Plaspy uses the same shared port and endpoint to consolidate incoming connections

## Transport and Connection Context

Connection to Plaspy is handled over cellular data and can be configured to use either UDP or TCP depending on device support. For devices pointed at Plaspy, the required connection endpoint and port are shared across devices to simplify deployment and scaling.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for direct configuration
- The port is 8888 and the device may be configured using UDP or TCP on port 8888
- All devices in Plaspy use the same port which simplifies SMS based provisioning and remote setup
- APN settings on the tracker must be correct for the device to establish GPRS connectivity
- SMS configuration remains useful as a fallback or for devices with intermittent data connectivity

## Protocol Compatibility Notes

- Firmware variations between ST-902A units can affect which commands and reporting options are available
- Hardware revisions or regional model variants can change supported transports and SMS command syntax
- Manufacturer side changes to default settings or SMS command formats can affect device provisioning
- Transport choice (UDP vs TCP) is controlled by the device configuration and must match Plaspy expectations
- Verify IMEI handling and device registration behavior if operating in regions with special compliance rules
- Always compare device behavior against the manufacturer documentation before large scale rollout
- For devices using SMS fallback, ensure the SIM plan supports reliable text delivery in your operating area

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps with faster setup, reliable operation, and efficient troubleshooting when integrating the ST-902A with Plaspy. A basic knowledge of how the device reports and what settings are required reduces deployment friction and helps diagnose connectivity or data quality issues.

- Ensures correct APN and server settings are applied for reliable GPRS reporting
- Helps determine whether to use UDP or TCP transport for your deployment
- Aids in interpreting device events and alarm messages received by Plaspy
- Improves on site provisioning speed using SMS configuration when data is unavailable
- Reduces time to resolve reporting gaps by validating device registration and connection

## Why Use Plaspy with This Protocol

Using the ST-902A with Plaspy gives organizations a straightforward path to real time vehicle visibility with minimal installation effort. The plug and play OBD form factor combined with SMS configurable server settings makes it easy to deploy devices and point them to the shared Plaspy endpoint for consolidated tracking, alerts, and historical playback.

To learn more about Plaspy visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time so verify the latest device specific protocol documentation and firmware notes on the manufacturer site https://www.sinotrackgps.com/ before large scale deployment.
