---
slug: /flextrack/lommy_power_9b23/protocol
id: lommy_power_9b23-protocol
sidebar_label: Protocol
title: Flextrack - Lommy Power 9B23 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for Flextrack Lommy Power 9B23 communication with Plaspy servers and basic connection context
keywords:
  - Flextrack Lommy Power 9B23
  - Lommy Power 9B23 protocol
  - Flextrack GPS protocol
  - Lommy Power GPS tracker
  - Plaspy device compatibility
  - machine tracking protocol
  - fleet GPS protocol
  - equipment telematics protocol
  - Lommy Power Plaspy integration
  - industrial GPS tracker
---

# Flextrack - Lommy Power 9B23 Protocol

This page describes the public protocol context for using the Flextrack Lommy Power 9B23 with Plaspy. It summarizes how the device communicates with Plaspy servers, what connection settings are used, and high level considerations that affect integration without exposing firmware internals or sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact behavior can vary by firmware version, hardware revision, and manufacturer implementation, so the notes below are intended as public guidance rather than a firmware level protocol specification.

## Protocol Overview

The device communication protocol defines how the Lommy Power 9B23 reports location, telemetry, and event information to a remote server such as Plaspy. At a high level the protocol provides identity, positioning, motion and telemetry data in a way that Plaspy can ingest and map to alerts, dashboards, and APIs.

- Enables periodic and event driven transmission of GNSS position and telemetry from the device to Plaspy.
- Carries device identity and status information so Plaspy can associate reports with the correct asset and configuration.
- Conveys motion and ignition related events used by Plaspy to generate geofence alerts, operating hour accumulation, and theft notifications.
- Supports resilient behavior such as local buffering on the device so data is available to Plaspy after connectivity is restored.
- Works over standard IP transports so Plaspy can receive and normalize data for display, reporting, and integrations.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for incoming device reports and automatically detects the tracker protocol used by each device once it begins reporting. In most cases you do not need to choose a protocol inside Plaspy when the device is configured to send data to the Plaspy endpoint.

- Plaspy server domain used for device reporting is d.plaspy.com.
- Plaspy server IP address published for device configuration is 54.85.159.138.
- Plaspy listens on port 8888 for device connections and ingestion.
- Devices may be configured to use UDP or TCP on port 8888 when reporting to Plaspy.
- All devices in Plaspy use the same port and the platform automatically detects the tracker protocol when data arrives.

## Transport and Connection Context

Connection context covers the transport and addressing details required for the device to reach Plaspy. Lommy Power 9B23 supports standard cellular transports and can be configured to point to Plaspy by domain or IP depending on installer preference and network needs.

- Devices may be configured to report to d.plaspy.com or to the IP address 54.85.159.138.
- The supported transport options include UDP and TCP on port 8888, selectable via device configuration where supported.
- Plaspy uses the same port 8888 for all supported devices to simplify device setup and server routing.
- Where available, devices may also offer SMS or alternative fallbacks for very low bandwidth conditions; check the installer options for your unit.
- Network connectivity and operator differences can affect delivery timing and should be considered when validating reports.

## Protocol Compatibility Notes

- Lommy Power 9B23 is described as Plaspy compatible, but compatibility can depend on firmware version and carrier configuration.
- Hardware revisions or firmware updates from the manufacturer can change reporting intervals, available telemetry, or transport defaults.
- Some features such as auxiliary input reporting, operating hour telemetry, or SMS fallbacks may require specific firmware or configuration steps.
- Choosing UDP versus TCP can affect delivery semantics and should match the device configuration and mobile operator behavior.
- Local buffering size and behavior are determined by device firmware and may affect how much historical data is forwarded after outages.
- Always validate device settings against the manufacturer documentation and confirm that the unit is pointed to the Plaspy endpoint.

## Why Protocol Understanding Matters

A practical understanding of the communication protocol helps installers and fleet managers ensure reliable data flow, troubleshoot connectivity issues, and map device events to Plaspy workflows and alerts.

- Confirms that the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 so Plaspy can ingest data.
- Helps diagnose transport related issues such as UDP packet loss or TCP session failures that impact reporting frequency.
- Clarifies which telemetry and event types the device can produce so Plaspy rules and dashboards are configured correctly.
- Supports planning for firmware updates, carrier provisioning, and field installation practices that affect signal quality and uptime.
- Enables better coordination between installers, operations teams, and Plaspy support when validating asset tracking and utilization reports.

## Why Use Plaspy with This Protocol

Using the Lommy Power 9B23 with Plaspy gives teams continuous machine level visibility through a mature telemetry pipeline and simple connection settings. The unit's hard wired design, multi constellation GNSS, and LTE connectivity provide reliable position and operating hour data that Plaspy can convert into alerts, utilization reports, and maintenance triggers for construction, agriculture, and forestry fleets.

If you would like to learn more about Plaspy and how this tracker integrates into Plaspy workflows visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer device details can change over time; verify the most current device specific information on the manufacturer site https://flextrack.dk.
